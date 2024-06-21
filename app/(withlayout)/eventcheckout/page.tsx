"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { CartContext } from "@/components/CartContext";

const EventCheckout = () => {
	return (
		<section className='overflow-hidden z-10 bg-black py-11 font-poppins'>
			<div className='max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full px-4 md:w-1/2 '>
						<div className='sticky top-0 z-50 overflow-hidden '>
							<div className='relative mb-6 lg:mb-10 lg:h-2/4 '>
								<Image
									unoptimized
									width={200}
									height={200}
									src='/images/e4.jpg'
									alt=''
									className='object-cover w-full lg:h-full '
								/>
							</div>
						</div>
					</div>
					<div className='w-full px-4 md:w-1/2 '>
						<div className='lg:pl-20'>
							<div className='mb-8 '>
								<time
									dateTime='2025-12-04'
									className='flex items-center justify-between text-yellow-300 gap-4 text-lg font-bold uppercase '
								>
									<span>
										{new Date(
											"2025-12-04"
										).getFullYear()}
									</span>
									<span className='w-px flex-1 bg-gray-900/10'></span>
									<span>
										{new Date(
											"2025-12-04"
										).toLocaleDateString(
											"en-US",
											{
												month: "short",
												day: "numeric",
  										}
									)}
									</span>
								</time>
								<h2 className='max-w-xl mt-10 mb-6 text-2xl font-bold text-white md:text-4xl'>
									InnovateTech Summit -
									Tech Conference
								</h2>

								<p className='deskPara max-w-md mb-8 text-white'>
									Engage in
									thought-provoking
									discussions, connect
									with startups at the
									forefront of innovation,
									and dive into a
									collaborative hackathon
									challenge. Don&apos;t
									miss this chance to be
									part of the tech
									revolution – where the
									future is now. Secure
									your spot at the Tech
									Summit and shape the
									next chapter of
									technological excellence
								</p>
								<p className='landingHeadText inline-block text-4xl font-bold text-yellow-300'>
									<span>N 18,000</span>
								</p>
							</div>

							<a
								className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'
								href='#'
							>
								<span className='deskPara block text-black hover:bg-yellow-600  bg-yellow-400 px-12 mt-4 py-3 transition-transform hover:-translate-x-2 hover:-translate-y-2'>
									Add to Cart
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventCheckout;
