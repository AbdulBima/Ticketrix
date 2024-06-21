const CTA = () => {
	return (
		<>
			<section className='items-center justify-center mt-1 py-20 md:py-40 border-b-2 border-white bg-black flex h-[60vh] md:h-[70vh]'>
				<div className='relative items-center w-full px-5 mx-auto lg:px-16 max-w-7xl md:px-12'>
					<div className='max-w-3xl mx-auto text-center'>
						<div>
							<p className='landingHeadText mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl'>
								Create tickets
								<span className='md:block'>
									your audience will love
								</span>
							</p>
						</div>

						<a
							className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'
							href='/login'
						>
							<span className='absolute inset-0 border mt-10 border-yellow-300 group-active:border-yellow-300'></span>
							<span className='block border deskPara text-black border-yellow-300 bg-yellow-300 px-12 mt-10 py-3 transition-transform active:border-yellow-500 active:bg-yellow-500 group-hover:-translate-x-1 group-hover:-translate-y-1'>
								Get Started
							</span>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default CTA;
