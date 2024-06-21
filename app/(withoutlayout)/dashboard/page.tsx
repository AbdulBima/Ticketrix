"use client";
import Image from "next/image";
import React, {
	useContext,
	useEffect,
	useState,
} from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useTokenVerification from "../../../components/hooks/useTokenVerification";
import Loader from "@/components/Loader";

// Function to get the total number of members
const getTotalMembers = (members?: any[]) => {
	// Check if members is defined before accessing its length property
	return members ? members.length : 0;
};

const WelcomeBack = () => {
	const { userId, email, error, isLoading } =
		useTokenVerification();
	const [userData, setUserData] = useState<{
		first_name: string;
		last_name: string;
	}>({ first_name: "", last_name: "" });
	const router = useRouter();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				if (userId) {
					const userResponse = await axios.get(
						`https://backendv2-smz4.onrender.com/api/eventUser/${userId}`
					);
					setUserData({
						first_name:
							userResponse.data.first_name,
						last_name:
							userResponse.data.last_name,
					});
				}
			} catch (error) {
				console.error(
					"Error fetching user data:",
					error
				);
			}
		};

		if (!isLoading && (!userId || !email || error)) {
			// Handle redirect to login page or other actions if needed
		} else {
			fetchUserData();
		}
	}, [isLoading, userId, email, error]);

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	if (error) {
		router.push("/login");
	}

	return (
		<>
			<header className='w-full fixed h-screen bg-white md:mr-0 md:mx-auto'>
				<Image
					src='https://i.ibb.co/KjrPCyW/map.png'
					alt='world map image'
					className='z-10 absolute w-screen md:p-20 h-screen object-cover opacity-20'
					unoptimized
					width={96}
					height={96}
				/>
				<div className='mt-28 z-20 md:mt-0 md:w-[80vw] w-[100vw] px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
					<div className='px-8 md:px-0 md:flex md:flex-row md:justify-between sm:flex sm:items-center sm:justify-between'>
						<div className='text-center md:mx-0 mx-auto py-10 md:mr-0 md:py-0'>
							<h1 className=' deskPara md:landingHeadText text-xl md:text-3xl  font-bold text-gray-700  sm:text-2xl'>
								Welcome Back ,
								<span className='text-blue-700'>
									{" "}
									{userData.first_name}
								</span>
							</h1>
							<p className='deskPara mt-1.5 text-sm text-gray-500'>
								Hope you are having a
								wonderfull day🎉
							</p>
						</div>

						<div className='mt-4  flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
							<button
								className='z-20 deskPara text-center  hover:bg-gray-100 px-5 py-3 text-sm font-medium text-black transition bg-yellow-300 focus:outline-none focus:ring'
								type='button'
							>
								<Link href={"/myevents"}>
									<span className='deskPara text-sm font-medium'>
										My Events
									</span>
								</Link>
							</button>

							<button
								className='z-20 deskPara text-center  hover:bg-gray-100 px-5 py-3 text-sm font-medium text-white hover:text-black transition bg-blue-600 focus:outline-none focus:ring'
								type='button'
							>
								<Link href={"/createevent"}>
									<span className='deskPara text-sm font-medium'>
										Create Event
									</span>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</header>
			{/* <div className=' hidden md:block xl:px-20 px-6 py-6 '>
				<div className='md:mt-5 mt-4 relative sm:flex items-center justify-center'>
					<Image
						src='https://i.ibb.co/KjrPCyW/map.png'
						alt='world map image'
						className='w-[60vw] xl:h-[60vh] h-96 object-cover  sm:block hidden'
						unoptimized
						width={96}
						height={96}
					/>
					<Image
						src='https://i.ibb.co/SXKj9Mf/map-bg.png'
						alt='mobile-image'
						className='sm:hidden -mt-10 block w-[60vw] h-96 object-cover absolute z-0'
						unoptimized
						width={96}
						height={96}
					/>
					<div className='shadow-lg xl:p-6 p-4 sm:w-auto w-[60vw] bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 '>
						<p className='text-3xl font-semibold text-gray-800'>
							233
						</p>
						<p className='text-base leading-4 xl:mt-4 mt-2 text-gray-600'>
							Total members
						</p>
					</div> 

					{/* <div className='shadow-lg xl:p-6 p-4 sm:w-auto w-[60vw] bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-20 sm:ml-12 xl:mt-40 '>
						<p className='text-3xl font-semibold text-gray-800'>
							4567
						</p>
						<p className='text-base leading-4 xl:mt-4 mt-2 text-gray-600'>
							Total Loan to be Repayed
						</p>
					</div> 

					<div className='shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24'>
						<p className='text-3xl font-semibold text-gray-800'>
							8977
						</p>
						<p className='text-base leading-4 xl:mt-4 mt-2 text-gray-600'>
							Total Deposited Amount
						</p>
					</div>

				</div>
			</div> */}
		</>
	);
};

export default WelcomeBack;
