"use client";
import React from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useTokenVerification from "../hooks/useTokenVerification";

interface SiteMenuProps {
    closeMenu: () => void; // Prop to close the menu
}

const SiteMenu: React.FC<SiteMenuProps> = ({ closeMenu }) => {
    const pathname = usePathname();
    const { userId, email, error, isLoading } = useTokenVerification();
    const router = useRouter();

    const handleLogout = () => {
        window.localStorage.removeItem("userID");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("token_expiration");
        window.localStorage.removeItem("cart");
        router.push("/login");
        closeMenu(); // Close the menu after logging out
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
            <div className='md:hidden h-screen fixed mt-3 z-40 w-[85vw]'>
                <nav className='bg-blue-900 h-screen overflow-hidden '>
                    <motion.ul
                        className='space-y-1 ml-4 pt-20'
                        aria-label='Sidebar'
                        variants={container}
                        initial='hidden'
                        animate='show'
                    >
                        <div className='overflow-hidden'>
                            <motion.li
                                variants={item}
                                className='text-white flex items-center px-3 py-2 '
                            >
                                <Link
                                    className='flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52 '
                                    href='/'
                                    onClick={closeMenu} // Close menu when Home is clicked
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
                            </motion.li>
                        </div>

                        <div className='overflow-hidden'>
                            <motion.li
                                variants={item}
                                className='text-white flex items-center px-3 py-2 '
                            >
                                <Link
                                    className={
                                        pathname === "/dashboard"
                                            ? "flex deskPara items-center px-4 py-2 mt-5 text-orange-300 text-lg font-bold bg-transparent w-52 "
                                            : "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52 "
                                    }
                                    href='/dashboard'
                                    onClick={closeMenu} // Close menu when Dashboard is clicked
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
                            </motion.li>
                        </div>

                        <div className='overflow-hidden'>
                            <motion.li
                                variants={item}
                                className='text-white flex items-center px-3 py-2 '
                            >
                                <Link
                                    className={
                                        pathname === "/createevent"
                                            ? "flex deskPara items-center px-4 py-2 mt-5 text-orange-300 text-lg font-bold bg-transparent w-52  "
                                            : "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52 "
                                    }
                                    href='/createevent'
                                    onClick={closeMenu} // Close menu when Create Event is clicked
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
                            </motion.li>
                        </div>

                        <div className='overflow-hidden'>
                            <motion.li
                                variants={item}
                                className='text-white flex items-center px-3 py-2 '
                            >
                                <Link
                                    className={
                                        pathname === "/myevents"
                                            ? "flex deskPara items-center px-4 py-2 mt-5 text-orange-300 text-lg font-bold bg-transparent w-52 "
                                            : "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52 "
                                    }
                                    href='/myevents'
                                    onClick={closeMenu} // Close menu when My Events is clicked
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
                            </motion.li>
                        </div>

                        <div className='overflow-hidden'>
                            <motion.li
                                variants={item}
                                className='text-white flex items-center px-3 py-2 '
                            >
                                <Link
                                    className={
                                        pathname === "/mypurchase"
                                            ? "flex deskPara items-center px-4 py-2 mt-5 text-orange-300 text-lg font-bold bg-transparent w-52  "
                                            : "flex deskPara items-center px-4 py-2 mt-5 text-white hover:text-orange-300 text-lg font-bold bg-transparent w-52 "
                                    }
                                    href='/mypurchase'
                                    onClick={closeMenu} // Close menu when My Purchase is clicked
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
                            </motion.li>
                        </div>
                    </motion.ul>

                    <div className='w-full flex items-center py-4 mt-10 ml-6'>
                        <button
                            className='flex deskPara items-center px-4 py-2 text-white hover:opacity-70'
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
                            <span className='mx-4 font-sm'>
                                Logout - ({email})
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SiteMenu;
