import React, {
	useContext,
	useEffect,
	useState,
} from "react";
import { CartContext } from "../CartContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const MUpCom = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);


	const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
    }).format(price);
};


	const { addEventToCart } =
		useContext(CartContext) ?? {};

	const handleAddToCart = (event: Event) => {
		addEventToCart?.(event);
		// You can add additional logic after adding to the cart if needed
		// alert(`${event.eventName} added to cart`);
		toast.success(`${event.eventName} added to cart`, {
			position: "top-left",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://backendv2-smz4.onrender.com/api/event/"
				);
				console.log("Response:", response.data);

				// Assuming the response is an array of events
				setEvents(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error:", error);
				// Handle error here
			}
		};

		// Call the fetchData function when the component mounts
		fetchData();
	}, []);

	return (
		<>
			<div className='md:hidden relative block mx-auto w-full pt-24 py-16 h-auto '>
				<h1 className='py-6 top-10 mb-10 mx-auto text-lg font-bold text-center landingHeadText text-blue-900  lg:text-3xl '>
					Discover What&apos;s Coming Up
				</h1>
		
				{isLoading ? (
							<div className='banter-loader absolute py-16'>
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
					<div
						key={event._id}
						className="md:hidden mt-8 relative mx-auto w-[85vw] h-[50vh] px-4 py-4 bg-cover shadow-md bg-[url('/images/e4.jpg')]"
					>
						<div className='absolute top-0  left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
						<div className='absolute top-0  left-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>

						<div className='flex items-center justify-between z-40 mt-56'>
							<a
								className='z-40'
								href={`/events/${event._id}`}
							>
								<div className='landingHeadText flex items-center justify-between z-10 text-lg text-white hover:underline'>
									{event.eventName}
								</div>
							</a>
						</div>

						<div className='z-20 flex items-center justify-between mt-4'>
							<div
								className='z-20 text-2xl text-yellow-300 hover:underline'
								tabIndex={0}
								role='link'
							>
								 {formatPrice(event.ticket_price)}
							</div>

							<div className='z-20 sm:flex sm:items-end sm:justify-end'>
								<div className='deskPara block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400'>
									<button
										onClick={() =>
											handleAddToCart(
												event
											)
										}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
							
		</>
						)}

			</div>
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

export default MUpCom;
