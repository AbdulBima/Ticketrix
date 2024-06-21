"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useLogout: any = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const logout = async () => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post(
				"https://backendv2-smz4.onrender.com/api/eventUser/logout",
				{},
				{
					withCredentials: true,
				}
			);

			if (response.status === 200) {
				// Logout successful
				setSuccess(true);
			} else {
				// Handle other status codes if needed
				setError(response.data.error);
			}
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { logout, loading, error, success };
};

export default useLogout;
