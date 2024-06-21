"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TokenVerificationResult {
	userId: string | null;
	email: string | null;
	error: string | null;
	isLoading: boolean;
}

function useTokenVerification(): TokenVerificationResult {
	const [verificationResult, setVerificationResult] =
		useState<TokenVerificationResult>({
			userId: null,
			email: null,
			error: null,
			isLoading: true,
		});

	const router = useRouter();

	useEffect(() => {
		const verifyToken = async (token: string) => {
			try {
				const response = await axios.get(
					"https://backendv2-smz4.onrender.com/api/auth/verifyToken",
					{
						headers: {
							Authorization: token,
						},
					}
				);

				if (
					response.data &&
					response.data.userId &&
					response.data.email
				) {
					setVerificationResult({
						userId: response.data.userId,
						email: response.data.email,
						error: null,
						isLoading: false,
					});
				} else {
					setVerificationResult({
						userId: null,
						email: null,
						error: "Invalid token",
						isLoading: false,
					});
				}
			} catch (error) {
				console.error(
					"Error verifying token:",
					error
				);
				setVerificationResult({
					userId: null,
					email: null,
					error: "Error occurred while verifying token",
					isLoading: false,
				});
				router.push("/login");
			}
		};

		const token = localStorage.getItem("token");

		if (token) {
			verifyToken(token);
		} else {
			setVerificationResult({
				userId: null,
				email: null,
				error: "Token not found in localStorage",
				isLoading: false,
			});
			router.push("/login");
		}

		// Call verifyToken every hour
		const intervalId = setInterval(() => {
			const token = localStorage.getItem("token");
			if (token) {
				verifyToken(token);
			}
		}, 60 * 60 * 1000); // 1 hour in milliseconds

		// Clear the interval on unmount
		return () => clearInterval(intervalId);
	}, [router]);

	return verificationResult;
}

export default useTokenVerification;
