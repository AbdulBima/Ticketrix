import { useRouter } from "next/navigation";

const Mlanding = () => {
	const router = useRouter();

	const handleCreateEventLink = () => {
		const token = localStorage.getItem("token");

		if (token) {
			router.push("/createevent");
		} else {
			router.push("/login");
		}
	};

	return (
		<>
			<div className="md:hidden relative flex flex-col items-start h-[70vh] w-full bg-[url('/images/e3.jpg')] bg-cover bg-center bg-no-repeat">
				<div className='absolute top-0 left-0 w-full h-full opacity-60 bg-gradient-to-b from-black to-transparent'></div>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500 to-transparent'></div>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

				<div className=' absolute top-52  left-5 pr-10'>
					<h1 className='landingHeadText text-3xl mb-6 mt-6  leading-tight text-white'>
						Host Unforgettable Events with Ease
					</h1>
				</div>

				<div className='flex-none absolute top-80 left-5 pr-8'>
					<h1 className='deskPara text-white '>
						Here, creativity meets seamless
						event planning. Whether it&apos;s a
						celebration, conference, or
						gathering, we&apos;ve got your
						ticketing covered.
					</h1>
				</div>

				<div className='flex-none absolute bottom-20 left-5 right-6 '>
					<button
						onClick={handleCreateEventLink}
						className='group relative inline-flex items-center overflow-hidden  bg-blue-900 px-10 py-3 text-white  active:bg-blue-500'
					>
						<span className='absolute -start-full transition-all group-hover:start-4'>
							<svg
								className='size-5 rtl:rotate-180'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</span>

						<span className='text-lg font-bold deskPara transition-all group-hover:ms-4'>
							Create Event
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Mlanding;
