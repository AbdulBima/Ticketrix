"use client";
import React, { useState } from "react";
import SiteMenu from "./SiteMenu";
import useTokenVerification from "../hooks/useTokenVerification";
import { usePathname, useRouter } from "next/navigation";

const DashNav = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<div className='md:hidden fixed top-0 z-50 navbar mt-0 bg-white shadow-sm border-b border-blue-200'>
				<div className='navbar-start'>
					<div
						className='dropdown'
						onClick={toggleMenu}
					>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost btn-circle'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='navbar-center'>
					<a className='btn btn-ghost text-xl'>
						Ticketrix
					</a>
				</div>
				<div className='navbar-end'>
					{/* <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
				</div>
			</div>

			{isMenuOpen && (
				<SiteMenu closeMenu={closeMenu} />
			)}
		</>
	);
};

export default DashNav;
