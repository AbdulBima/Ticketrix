"use client";

import MainSiteMenu from "./MainSiteMenu";
import useTokenVerification from "../hooks/useTokenVerification";
import { createContext, useState, useContext, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import { useRouter } from "next/navigation";

const MainSiteNav = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const cartContext = useContext(CartContext);
	const router = useRouter();

	const { cartProducts } = cartContext || { cartProducts: [] }; // Default cartProducts to empty array if cartContext is null

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const handleCartLink = () => {
		const token = localStorage.getItem("token");

		if (token) {
			router.push("/cart");
		} else {
			router.push("/login");
		}
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className="md:hidden fixed z-[100] navbar mt-0 bg-white shadow-sm border-b border-blue-200">
				<div className="navbar-start">
					<div className="dropdown" onClick={toggleMenu}>
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="navbar-center">
					<a href="/" className="landingHeadText btn btn-ghost text-lg">
						Ticketrix
					</a>
				</div>
				<div className="navbar-end">
					<button onClick={handleCartLink} className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								className="w-5 h-5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 5h10c.82 0 1.5.67 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V6.5A1.5 1.5 0 0 1 7 5z"
									stroke="currentColor"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M3 9h18v12H3V9z"
									stroke="black"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M16 9V6.5A1.5 1.5 0 0 0 14.5 5h-5A1.5 1.5 0 0 0 8 6.5V9"
									stroke="black"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							{cartProducts.length}
						</div>
					</button>
				</div>
			</div>

			{isMenuOpen && <MainSiteMenu closeMenu={closeMenu} />}
		</>
	);
};

export default MainSiteNav;
