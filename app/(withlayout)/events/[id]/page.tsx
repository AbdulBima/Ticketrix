"use client"
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, {
	useEffect,
	useState,
	useContext,
} from "react";
import { CartContext } from "@/components/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface Event {
	_id: string;
	eventName: string;
	eventCreator: string;
	dateOfEvent: string;
	location: string;
	ticket_price: number;
	quantity_of_ticket: number;
	quantity_of_ticket_purchased: number;
	description: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const EventDisplay: React.FC = () => {
	const { id } = useParams();

	const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
    }).format(price);
};

	const [event, setEvent] = useState<Event>();
	const { addEventToCart } =
		useContext(CartContext) ?? {};

	const handleAddToCart = (event: Event | undefined) => {
		if (event && addEventToCart) {
			addEventToCart(event);
			// alert(`${event.eventName} added to cart`);

			toast.success(
				`${event.eventName} added to cart`,			{
					position: "top-left",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				}
			);
		} else {
			console.error("Event is undefined");
		}
	};

	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const response = await axios.get<Event>(
					`https://backendv2-smz4.onrender.com/api/event/${id}`
				);
				setEvent(response.data);
			} catch (error) {
				console.error(
					"Error fetching event:",
					error
				);
			}
		};

		if (id) {
			fetchEvent();
		}
	}, [id]);

	return (
		<>
		<section className='overflow-hidden   bg-black py-20  font-poppins'>
			<div className='max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6'>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full px-4 md:w-1/2 '>
						<div className='overflow-hidden '>
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
									dateTime={
										event?.dateOfEvent ||
										""
									} // Set the dateTime attribute to the dateOfEvent or an empty string if it's undefined
									className='flex items-center justify-between text-yellow-300 gap-4 text-lg font-bold uppercase'
								>
									<span>
										{event
											? new Date(
													event.dateOfEvent
											  ).getFullYear()
											: ""}
									</span>
									{/* Display the year if event exists */}
									<span className='w-px flex-1 bg-gray-900/10'></span>
									<span>
										{event
											? new Date(
													event.dateOfEvent
											  ).toLocaleDateString(
													"en-US",
													{
														// Display the month and day if event exists
														month: "short",
														day: "numeric",
													}
											  )
											: ""}
									</span>
								</time>

								<h2 className='max-w-xl mt-10 mb-6 text-2xl font-bold text-white md:text-4xl'>
									{event?.eventName}
								</h2>

								<p className='deskPara max-w-md mb-8 text-white'>
									{event?.description}
								</p>
								<p className='landingHeadText inline-block text-4xl font-bold text-yellow-300'>
									<span>
										
									{formatPrice(event?.ticket_price ?? 0)}
									</span>
								</p>
							</div>

							<button
								onClick={() =>
									handleAddToCart(event)
								}
								className='group relative inline-block text-sm font-medium text-white '
							>
								<span className='deskPara block text-black hover:bg-yellow-600  bg-yellow-400 px-12 mt-4 py-3 transition-transform hover:-translate-x-2 hover:-translate-y-2'>
									Add to Cart
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<ToastContainer
				position='top-left'
				autoClose={3000} // Close toast automatically after 3 seconds
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

export default EventDisplay;
export const runtime = "edge";
