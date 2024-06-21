"use client"

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '@/components/CartContext';
import Loader from '@/components/Loader';  
import MUpCom from '../mobileComponents/MUpCom';

interface Event {
	eventName: string;
	eventCreator: string;
	dateOfEvent: string;
	location: string;
	ticket_price: number;
	quantity_of_ticket: number;
	quantity_of_ticket_purchased: number;
	description: string;
	_id: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const DUpComming = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const formatPrice = (price: number): string => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'NGN',
			minimumFractionDigits: 0,
		}).format(price);
	};

	const { addEventToCart } = useContext(CartContext) ?? {};

	const handleAddToCart = (event: Event) => {
		addEventToCart?.(event);
		toast.success(`${event.eventName} added to cart`, {
			position: 'top-left',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://backendv2-smz4.onrender.com/api/event/');
				setEvents(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error:', error);
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<section className='hidden md:flex bg-blue-100 md:py-20 bg-opacity-20'>
				<div className='container px-6 py-10 mx-auto'>
					<h1 className='md:text-5xl font-bold text-center landingHeadText text-blue-900 lg:text-3xl'>
						Discover What&apos;s Coming Up
					</h1>

					<div className='relative grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2'>
						{isLoading ? (
							<div className='banter-loader absolute top-40'>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
							<div className='banter-loader__box'></div>
						</div>
						) : (
							<>
								{events.map((event) => (
									<div key={event._id} className='flex bg-white transition hover:shadow-xl'>
										<div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
											<time
												dateTime={event.dateOfEvent}
												className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
											>
												<span>{new Date(event.dateOfEvent).getFullYear()}</span>
												<span className='w-px flex-1 bg-gray-900/10'></span>
												<span>
													{new Date(event.dateOfEvent).toLocaleDateString('en-US', {
														month: 'short',
														day: 'numeric',
													})}
												</span>
											</time>
										</div>

										<div className='hidden sm:block sm:basis-56'>
											<Link href={`/events/${event._id}`}>
												<Image
													alt=''
													src={'/images/e2.jpg'}
													className='aspect-square h-full w-full object-cover'
													width={600}
													height={600}
													loading='lazy'
													unoptimized
												/>
											</Link>
										</div>

										<div className='flex flex-1 flex-col justify-between'>
											<div className='border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
												<Link className='flex flex-col space-y-4' href={`/events/${event._id}`}>
													<h3 className='landingHeadText font-bold uppercase text-black'>
														{event.eventName}
													</h3>

													<h3 className='text-xl font-bold text-orange-600'>
														{formatPrice(event.ticket_price)}
													</h3>

													<h3 className='font-bold deskPara capitalize'>
														Venue: {event.location}
													</h3>
												</Link>
											</div>

											<div className='sm:flex sm:items-end sm:justify-end'>
												<button
													onClick={() => handleAddToCart(event)}
													className='deskPara block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400'
												>
													Add to Cart
												</button>
											</div>
										</div>
									</div>
								))}
							</>
						)}
					</div>
				</div>
			</section>

			{/* Mobile Component */}
			<MUpCom />

			<ToastContainer
				position='top-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default DUpComming;
