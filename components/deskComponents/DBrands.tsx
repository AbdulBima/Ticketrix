import Image from "next/image";

const DBrand = () => {
	return (
		<>
			<section className='px-4 pb-10  pt-16  md:pt-16 mx-auto  bg-blue-100 bg-opacity-25 max-w-full'>
				<h1 className='landingHeadText mb-3 text-3xl font-bold leading-tight text-center text-blue-900 md:text-4xl'>
					Trusted by 6800+, built by US
				</h1>
				<p className='hidden deskPara md:grid mb-10 text-lg text-center text-gray-600'>
					Organizations of all sizes trust
					TICKETRIX to manage customer feedback
				</p>
				<div className='grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6 p-10'>
					<div className='flex items-center justify-center border-opacity-5 border-blue-900 px-6 border-r-2 '>
						<Image
							unoptimized
							width={120}
							height={60}
							src='/images/logos/l6.png'
							alt='Todoist Logo'
							className='block object-contain h-16'
						/>
					</div>
					<div className='flex items-center justify-center border-opacity-5 border-blue-900 pl-4  border-l-2'>
						<Image
							unoptimized
							width={300}
							height={300}
							src='/images/logos/l1.png'
							alt='Slack Logo'
							className='block object-contain h-20'
						/>
					</div>
					<div className='flex items-center justify-center border-opacity-5 border-blue-900 border-r-2 pr-4 '>
						<Image
							unoptimized
							width={200}
							height={120}
							src='/images/logos/l4.png'
							alt='Typeform Logo'
							className='block object-contain h-16'
						/>
					</div>
					<div className='flex items-center justify-center border-opacity-5 border-blue-900 pl-4 border-l-2'>
						<Image
							unoptimized
							width={200}
							height={120}
							src='/images/logos/l2.png'
							alt='Algolia Logo'
							className='block object-contain h-16'
						/>
					</div>
					<div className='flex items-center justify-center border-opacity-5 border-blue-900 border-r-2 pr-4'>
						<Image
							unoptimized
							width={200}
							height={120}
							src='/images/logos/l5.png'
							alt='Postcss Logo'
							className='block object-contain h-16'
						/>
					</div>
					<div className='flex items-center justify-center border-opacity-5 border-blue-900 pl-4 border-l-2'>
						<Image
							unoptimized
							width={200}
							height={120}
							src='/images/logos/l3.png'
							alt='Yahoo Logo'
							className='block object-contain h-16'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default DBrand;
