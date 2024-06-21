"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
	createContext,
	useState,
	useContext,
	useEffect,
} from "react";
import { CartContext } from "@/components/CartContext";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import axios from "axios";

const NavBarD = () => {
	const [isHydrated, setIsHydrated] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const cartContext = useContext(CartContext);
	const { cartProducts } = cartContext || {
		cartProducts: [],
	}; // Default cartProducts to empty array if cartContext is null

	useEffect(() => {
		setIsHydrated(true); // This useEffect will only run on the client side after initial rendering
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
					setIsLoggedIn(true);
				}
			} catch (error) {
				console.error(
					"Error verifying token:",
					error
				);
			}
		};
		const token = localStorage.getItem("token");
		if (token) {
			verifyToken(token);
		}
	}, []);

	const handleLogout = () => {
		document.cookie =
			"access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Remove access_token cookie
		localStorage.removeItem("userID");
		localStorage.removeItem("token");
		localStorage.removeItem("token_expiration");
		router.push("/");
	};

	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<header className='hidden md:block shadow-lg md:shadow-none z-40 bg-white'>
				<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<div className='flex-1 md:flex md:items-center md:gap-12'>
							<a
								className='block text-teal-600'
								href='/'
							>
								<p className='landingHeadText text-blue-900 text-xl '>
									Ticketrix
								</p>
							</a>
						</div>

						<div className='md:flex md:items-center md:gap-12'>
							<nav
								aria-label='Global'
								className='hidden md:block'
							>
								<ul className='deskPara flex items-center gap-6 text-sm'>
									{isHydrated &&
										isLoggedIn && (
											<a
												className='text-gray-500 transition hover:text-gray-500/75'
												href='/dashboard'
											>
												Dashboard
											</a>
										)}

									<li>
										{isHydrated &&
											isLoggedIn && (
												<a
													className='text-gray-500 transition hover:text-gray-500/75'
													href='/createevent'
												>
													Create
												</a>
											)}
									</li>

									<li>
										<a
											className='text-gray-500 transition hover:text-gray-500/75'
											href='/events'
										>
											Events
										</a>
									</li>

									<li>
										<a
											className='text-gray-500 transition hover:text-gray-500/75'
											href='/about'
										>
											About Us
										</a>
									</li>

									<li>
										<a
											className='text-gray-500 transition hover:text-gray-500/75'
											href='/contact'
										>
											Contact
										</a>
									</li>

									<li>
										<a
											className='text-gray-500 transition hover:text-gray-500/75'
											href='/cart'
										>
											Cart(
											{
												cartProducts.length
											}
											)
										</a>
									</li>

									{isHydrated &&
										(isLoggedIn ? (
											<li
												className='cursor-pointer bg-blue-800 px-5 py-2 text-sm font-medium  text-white shadow'
												onClick={
													handleLogout
												}
											>
												Logout
											</li>
										) : (
											<li>
												<a
													className='cursor-pointer rounded-md bg-blue-900 px-5 py-2 text-sm font-medium text-white shadow'
													href='/login' // Change the href based on your login logic
												>
													Login
												</a>
											</li>
										))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavBarD;
