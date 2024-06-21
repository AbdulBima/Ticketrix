import Image from "next/image";
import MWhy from "../mobileComponents/MWhy";

const DWhyUs = () => {
	return (
		<>
			<div className='hidden md:flex px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='grid gap-10 lg:grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<div className='max-w-xl mb-6'>
							<h2 className='landingHeadText text-blue-900 max-w-lg mb-6 font-sans md:text-5xl font-bold tracking-tight sm:text-4xl sm:leading-none'>
								Why Choose Us
							</h2>
							<p className='deskPara text-base text-gray-700 md:text-lg'>
								Our intuitive platfom makes
								event creation a breeze - no
								expertise required.
							</p>
						</div>
						<p className='deskPara  text-black mb-4 font-bold tracking-widest uppercase'>
							Features
						</p>
						<div className='grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0'>
							<ul className='deskPara space-y-3'>
								<li className='flex'>
									<span className='mr-1'>
										<svg
											className='w-5 h-5 mt-px text-deep-purple-accent-400'
											stroke='currentColor'
											viewBox='0 0 52 52'
										>
											<polygon
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
												fill='none'
												points='29 13 14 29 25 29 23 39 38 23 27 23'
											/>
										</svg>
									</span>
									User-friendly interface
								</li>
								<li className='flex'>
									<span className='mr-1'>
										<svg
											className='w-5 h-5 mt-px text-deep-purple-accent-400'
											stroke='currentColor'
											viewBox='0 0 52 52'
										>
											<polygon
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
												fill='none'
												points='29 13 14 29 25 29 23 39 38 23 27 23'
											/>
										</svg>
									</span>
									Diverse customization
									options
								</li>
								<li className='flex'>
									<span className='mr-1'>
										<svg
											className='w-5 h-5 mt-px text-deep-purple-accent-400'
											stroke='currentColor'
											viewBox='0 0 52 52'
										>
											<polygon
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
												fill='none'
												points='29 13 14 29 25 29 23 39 38 23 27 23'
											/>
										</svg>
									</span>
									Real-time analytics
								</li>
							</ul>
							<ul className='space-y-3'>
								<li className='flex'>
									<span className='mr-1'>
										<svg
											className='w-5 h-5 mt-px text-deep-purple-accent-400'
											stroke='currentColor'
											viewBox='0 0 52 52'
										>
											<polygon
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
												fill='none'
												points='29 13 14 29 25 29 23 39 38 23 27 23'
											/>
										</svg>
									</span>
									Integrated tools
								</li>
								<li className='flex'>
									<span className='mr-1'>
										<svg
											className='w-5 h-5 mt-px text-deep-purple-accent-400'
											stroke='currentColor'
											viewBox='0 0 52 52'
										>
											<polygon
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
												fill='none'
												points='29 13 14 29 25 29 23 39 38 23 27 23'
											/>
										</svg>
									</span>
									Virtual event
									capabilities
								</li>
								<li className='flex'>
									<span className='mr-1'>
										<svg
											className='w-5 h-5 mt-px text-deep-purple-accent-400'
											stroke='currentColor'
											viewBox='0 0 52 52'
										>
											<polygon
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
												fill='none'
												points='29 13 14 29 25 29 23 39 38 23 27 23'
											/>
										</svg>
									</span>
									Vendor integration
								</li>
							</ul>
						</div>
					</div>
					<div>
						<div className='flex items-center justify-center -mx-4 lg:pl-8'>
							<div className='flex flex-col items-end px-3'>
								<Image
									unoptimized
									width={40}
									height={40}
									className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
									src='/images/e2.jpg'
									alt=''
								/>
								<Image
									unoptimized
									width={40}
									height={40}
									className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
									src='/images/e3.jpg'
									alt=''
								/>
							</div>
							<div className='px-3'>
								<Image
									unoptimized
									width={40}
									height={40}
									className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
									src='/images/e4.jpg'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<MWhy />
		</>
	);
};

export default DWhyUs;
