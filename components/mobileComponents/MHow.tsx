import Image from "next/image";

const MHow = () => {
	return (
		<div className='flex flex-col md:hidden px-4 pt-8  mx-auto sm:max-w-xl '>
			<h2 className='landingHeadText py-8 text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl'>
				How it Works
			</h2>
			<div className='grid gap-6 row-gap-10 lg:grid-cols-2'>
				<div className='lg:py-6 lg:pr-16'>
					<div className='flex'>
						<div className='flex flex-col items-center mr-4'>
							<div>
								<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
									<svg
										className='w-4 text-gray-600'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										viewBox='0 0 24 24'
									>
										<line
											fill='none'
											strokeMiterlimit='10'
											x1='12'
											y1='2'
											x2='12'
											y2='22'
										/>
										<polyline
											fill='none'
											strokeMiterlimit='10'
											points='19,15 12,22 5,15'
										/>
									</svg>
								</div>
							</div>
							<div className='w-px h-full bg-gray-300' />
						</div>
						<div className='pt-1 pb-8'>
							<p className='mb-2 text-lg text-orange-700 font-bold'>
								Create
							</p>
							<p className='text-gray-700'>
								Start effortlessly with our
								intuitive event wizard.
								Enter event details and
								explore various categories
								for a tailored
								representation.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div className='flex flex-col items-center mr-4'>
							<div>
								<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
									<svg
										className='w-4 text-gray-600'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										viewBox='0 0 24 24'
									>
										<line
											fill='none'
											strokeMiterlimit='10'
											x1='12'
											y1='2'
											x2='12'
											y2='22'
										/>
										<polyline
											fill='none'
											strokeMiterlimit='10'
											points='19,15 12,22 5,15'
										/>
									</svg>
								</div>
							</div>
							<div className='w-px h-full bg-gray-300' />
						</div>
						<div className='pt-1 pb-8'>
							<p className='mb-2 text-orange-600 text-lg font-bold'>
								Customize
							</p>
							<p className='text-gray-700'>
								Dive into customization with
								diverse themes and
								templates. Tailor your event
								with personalization tools
								for a unique atmosphere.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div className='flex flex-col items-center mr-4'>
							<div>
								<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
									<svg
										className='w-4 text-gray-600'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										viewBox='0 0 24 24'
									>
										<line
											fill='none'
											strokeMiterlimit='10'
											x1='12'
											y1='2'
											x2='12'
											y2='22'
										/>
										<polyline
											fill='none'
											strokeMiterlimit='10'
											points='19,15 12,22 5,15'
										/>
									</svg>
								</div>
							</div>
							<div className='w-px h-full bg-gray-300' />
						</div>
						<div className='pt-1 pb-8'>
							<p className='mb-2 text-lg text-orange-500 font-bold'>
								Invite
							</p>
							<p className='text-gray-700'>
								Design visually stunning
								invitations, customize
								content, and manage RSVPs
								seamlessly with integrated
								tools.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div className='flex flex-col items-center mr-4'>
							<div>
								<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
									<svg
										className='w-4 text-gray-600'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										viewBox='0 0 24 24'
									>
										<line
											fill='none'
											strokeMiterlimit='10'
											x1='12'
											y1='2'
											x2='12'
											y2='22'
										/>
										<polyline
											fill='none'
											strokeMiterlimit='10'
											points='19,15 12,22 5,15'
										/>
									</svg>
								</div>
							</div>
							<div className='w-px h-full bg-gray-300' />
						</div>
						<div className='pt-1 pb-8'>
							<p className='mb-2 text-lg text-orange-400 font-bold'>
								Manage
							</p>
							<p className='text-gray-700'>
								Stay organized with
								timelines, checklists, and
								streamlined team
								communication through a
								centralized hub.
							</p>
						</div>
					</div>
					<div className='flex'>
						<div className='flex flex-col items-center mr-4'>
							<div>
								<div className='flex items-center justify-center w-10 h-10 border rounded-full'>
									<svg
										className='w-6 text-gray-600'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<polyline
											fill='none'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeMiterlimit='10'
											points='6,12 10,16 18,8'
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className='pt-1'>
							<p className='mb-2 text-lg font-bold'>
								Success
							</p>
							<p className='text-gray-700' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MHow;
