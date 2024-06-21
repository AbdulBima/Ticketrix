"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import useTokenVerification from "../hooks/useTokenVerification";
import Link from "next/link";

const SideNav = () => {
	const { userId, email, error, isLoading } =
		useTokenVerification();
	const pathname = usePathname();
	const router = useRouter();

	const handleLogout = () => {
		window.localStorage.removeItem("userID");
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("token_expiration");
		window.localStorage.removeItem("cart");
		router.push("/login");
	};

	return (
		<aside className=' md:flex md:flex-col md:fixed  w-[20vw] h-full overscroll-none overflow-x-hidden py-2 overflow-y-hidden bg-blue-900'>
			<div className='flex flex-col items-center mt-14 -mx-2'>
				<Image
					className='object-cover border-4 border-yellow-300 w-20 h-20 mx-2 rounded-full'
					src='/images/f1.jpg'
					alt='avatar'
					unoptimized
					width={20}
					height={20}
				/>

				<p className='deskPara mx-2 mt-1 text-lg font-medium text-white'>
					{email}
				</p>
			</div>

			<div className='flex flex-col ml-2 justify-between flex-1 mt-10'>
				<nav>
					<Link
						className={
							pathname === "/"
								? "flex deskPara items-center px-4 py-2 mt-5 text-black bg-white w-full "
								: "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-black hover:bg-white w-full"
						}
						href='/'
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3 9v11h6v-7h6v7h6V9L12 3 3 9z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span className='mx-4 font-medium'>
							Home
						</span>
					</Link>

					<Link
						className={
							pathname === "/dashboard"
								? "flex deskPara items-center px-4 py-2 mt-5 text-black bg-white w-full "
								: "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-black hover:bg-white w-full"
						}
						href='/dashboard'
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='12'
								cy='12'
								r='10'
								stroke='currentColor'
								strokeWidth='2'
							/>
							<path
								d='M12 8v8m-4-4h8'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span className='mx-4 font-medium'>
							Dashboard
						</span>
					</Link>

					<Link
						className={
							pathname === "/createevent"
								? "flex deskPara items-center px-4 py-2 mt-5 text-black bg-white w-full "
								: "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-black hover:bg-white w-full"
						}
						href='/createevent'
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12 4v16m-8-8h16'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span className='mx-4 font-medium'>
							Create Event
						</span>
					</Link>

					<Link
						className={
							pathname === "/myevents"
								? "flex deskPara items-center px-4 py-2 mt-5 text-black  bg-white w-full "
								: "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-black hover:bg-white w-full"
						}
						href='/myevents'
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<span className='mx-4 font-medium'>
							My Events
						</span>
					</Link>

					<Link
						className={
							pathname === "/mypurchase"
								? "flex deskPara items-center px-4 py-2 mt-5 text-black  bg-white w-full "
								: "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-black hover:bg-white w-full"
						}
						href='/mypurchase'
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M5 20h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zm0-10h14m-14 4h14'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span className='mx-4 font-medium'>
							My Purchase
						</span>
					</Link>

					<button
						className='flex deskPara items-center px-4 py-2 mt-16 text-white  hover:opacity-70'
						onClick={handleLogout}
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M16 17l5-5-5-5M21 12H9'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<span className='mx-4 font-medium'>
							Logout
						</span>
					</button>
				</nav>
			</div>
		</aside>
	);
};

export default SideNav;
