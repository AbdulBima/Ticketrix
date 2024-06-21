import Image from "next/image";
import Mlanding from "../mobileComponents/MLanding";

const Dlanding = () => {
	return (
		<>
			<section className="hidden relative md:grid grid-cols-1 gap-0 bg-[url('/images/e4.jpg')] bg-cover bg-center md:grid-cols-2">
				<div className='z-10 absolute top-0 left-0 w-full h-full opacity-40 bg-gradient-to-t  from-blue-500 to-transparent'></div>
				<div className='z-10 absolute top-0 left-0 w-full h-full opacity-60 bg-gradient-to-t  from-black to-transparent'></div>
				<div className='z-10 absolute top-0 left-0 w-full h-full opacity-80 bg-gradient-to-t  from-black to-transparent'></div>

				<div className='z-20 flex flex-col mt-16 items-start justify-center px-4 py-24 lg:px-20'>
					<h1 className='landingHeadText mb-6 mt-6  leading-tight text-white md:text-4xl lg:text-5xl'>
						Host Unforgettable Events with Ease
					</h1>
					<h1 className='deskPara text-white '>
						Here, creativity meets seamless
						event planning. Whether it&apos;s a
						celebration, conference, or
						gathering, we&apos;ve got your
						ticketing covered.
					</h1>
					<a
						className='group relative inline-block text-sm font-medium text-white '
						href='/createevent'
					>
						<span className='absolute inset-0 border mt-10 border-white group-active:border-white'></span>
						<span className='block font-bold text-lg text-white deskPara  bg-blue-900 px-12 mt-10 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1'>
							Create Ticket
						</span>
					</a>
				</div>

				<div className='relative'>
					{/* <Image
						src='/images/e4.jpg'
						alt='3 women looking at a laptop'
						className='object-cover w-full h-64 bg-gray-100 md:h-full'
						loading='lazy'
						width={96}
						height={64}
						unoptimized
          />
        <div className='absolute top-0 left-0 w-full h-full opacity-40 bg-gradient-to-t  from-blue-500 to-transparent'></div> */}
				</div>
			</section>
			<Mlanding />
		</>
	);
};

export default Dlanding;
