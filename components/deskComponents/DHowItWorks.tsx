import Image from "next/image";
import MHow from "../mobileComponents/MHow";

const DHowItWorks = () => {
	return (
		<>
			<div className='hidden md:grid px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
					<div></div>
					<h2 className='landingHeadText text-blue-900 max-w-full mb-6 font-sans md:text-5xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto'>
						How the{" "}
						<span className='text-yellow-400'>
							magic
						</span>{" "}
						happens
					</h2>
				</div>
				<div className='relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2'>
					<div className='absolute inset-0 flex items-center justify-center sm:hidden lg:flex'>
						<div className='w-px h-full bg-gray-300 lg:w-full lg:h-px' />
					</div>
					<div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
						<div className='flex items-center justify-between mb-2'>
							<p className='deskPara text-lg font-bold leading-5'>
								Create
							</p>
							<p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50'>
								1
							</p>
						</div>
						<p className='deskpara text-sm text-gray-900'>
							Start effortlessly with our
							intuitive event wizard. Enter
							event details and explore
							various categories for a
							tailored representation.
						</p>
					</div>
					<div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
						<div className='flex items-center justify-between mb-2'>
							<p className='deskPara text-lg font-bold leading-5'>
								Customize
							</p>
							<p className='deskPara flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50'>
								2
							</p>
						</div>
						<p className='deskPara text-sm text-gray-900'>
							Dive into customization with
							diverse themes and templates.
							Tailor your event with
							personalization tools for a
							unique atmosphere.
						</p>
					</div>
					<div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
						<div className='flex items-center justify-between mb-2'>
							<p className='deskPara text-lg font-bold leading-5'>
								Invite
							</p>
							<p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50'>
								3
							</p>
						</div>
						<p className='deskPara text-sm text-gray-900'>
							Design visually stunning
							invitations, customize content,
							and manage RSVPs seamlessly with
							integrated tools.
						</p>
					</div>
					<div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
						<div className='flex items-center justify-between mb-2'>
							<p className='deskPara text-lg font-bold leading-5'>
								Manage
							</p>
							<p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50'>
								4
							</p>
						</div>
						<p className='text-sm text-gray-900'>
							Stay organized with timelines,
							checklists, and streamlined team
							communication through a
							centralized hub.
						</p>
					</div>
				</div>
				<div className='text-center'>
					<a
						className='group relative inline-block text-sm font-medium text-white '
						href='signup'
					>
						<span className='absolute inset-0 border mt-10 border-blue-600 group-active:border-blue-500'></span>
						<span className='block border border-blue-900 bg-blue-900 px-12 mt-10 py-3 transition-transform active:border-blue-500 active:bg-blue-500 group-hover:-translate-x-1 group-hover:-translate-y-1'>
							Get Started
						</span>
					</a>
				</div>
			</div>

			<MHow />
		</>
	);
};

export default DHowItWorks;
