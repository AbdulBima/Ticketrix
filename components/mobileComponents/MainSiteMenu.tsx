"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CartContext } from "../../components/CartContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faCalendarAlt, faUser, faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const MainSiteMenu: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
	const [isHydrated, setIsHydrated] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const { cartProducts } = useContext(CartContext) || { cartProducts: [] };

	useEffect(() => {
		setIsHydrated(true);
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
				if (response.data && response.data.userId && response.data.email) {
					setIsLoggedIn(true);
				}
			} catch (error) {
				console.error("Error verifying token:", error);
			}
		};
		const token = localStorage.getItem("token");
		if (token) {
			verifyToken(token);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("userID");
		localStorage.removeItem("token");
		router.push("/");
		closeMenu(); // Close the menu after logging out
	};

	const handleLogin = () => {
		router.push("/login");
		closeMenu(); // Close the menu after logging in
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0,
			},
		},
	};

	const item = {
		hidden: { x: "-100%" },
		show: { x: "0%", transition: { duration: 0.4 } },
	};

	return (
		<div>
			<div className="md:hidden h-screen fixed mt-3 z-[90] w-[85vw]">
				<nav className="bg-blue-900 h-screen overflow-hidden">
					<motion.ul
						className="space-y-1 ml-4 pt-20"
						aria-label="Sidebar"
						variants={container}
						initial="hidden"
						animate="show"
					>
						{isHydrated && isLoggedIn && (
							<motion.li variants={item} className="text-white flex items-center px-3 py-2">
								<Link
									className="flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52"
									href="/dashboard"
									onClick={closeMenu}
								>
									<FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5" />
									<span className="mx-4 font-medium">Dashboard</span>
								</Link>
							</motion.li>
						)}

						<motion.li variants={item} className="text-white flex items-center px-3 py-2">
							<Link
								className={
									pathname === "/events"
										? "flex deskPara items-center px-4 py-2 mt-5 text-orange-300 text-lg font-bold bg-transparent w-52"
										: "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52"
								}
								href="/events"
								onClick={closeMenu}
							>
								<FontAwesomeIcon icon={faCalendarAlt} className="w-5 h-5" />
								<span className="mx-4 font-medium">Events</span>
							</Link>
						</motion.li>

						

						{isHydrated && isLoggedIn ? (
							<motion.li variants={item} className="text-white flex items-center px-3 py-2">
								<Link
									className="flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52"
									href="/login"
									onClick={handleLogout}
								>
									<FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
									<span className="mx-4 font-medium">Logout</span>
								</Link>
							</motion.li>
						) : (
							<motion.li variants={item} className="text-white flex items-center px-3 py-2">
								<Link
									className="flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52"
									href="/login"
									onClick={handleLogin}
								>
									<FontAwesomeIcon icon={faSignInAlt} className="w-5 h-5" />
									<span className="mx-4 font-medium">Login</span>
								</Link>
							</motion.li>
						)}
					</motion.ul>
				</nav>
			</div>
		</div>
	);
};

export default MainSiteMenu;
