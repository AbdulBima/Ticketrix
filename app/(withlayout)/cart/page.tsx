"use client";

import axios from "axios";
import { useState, useContext } from "react";
// import { toast } from "react-toastify";
import { CartContext } from "@/components/CartContext";
import useTokenVerification from "../../../components/hooks/useTokenVerification";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface EventData {
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

const Cart = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const { userId, error } = useTokenVerification();
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		console.log("error");
		return null;
	}

	const {
		cartProducts,
		addEventToCart,
		reduceEventQuantityInCart,
		removeEvent,
		clearCart,
		totalAmount,
	} = cartContext;

	const handleEmailChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(event.target.value);
	};

	const handleReduceEventQuantity = (
		event: EventData
	) => {
		reduceEventQuantityInCart(event);
	};

	const handleDeleteEventInCart = (event: EventData) => {
		removeEvent(event);
		// alert(`${event.eventName} removed`);

		toast.success(`${event.eventName} removed`, {
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

	const handleIncreaseEventQuantity = (
		event: EventData
	) => {
		addEventToCart(event);
	};

	const initiatePayment = async () => {
		setIsLoading(true);

		const paymentData = {
			amount: totalAmount * 100,
			email: email,
			metadata: {
				custom_fields: [
					{
						display_name: "Cart Products",
						variable_name: "cart_products",
						value: JSON.stringify(cartProducts),
					},
					{
						display_name: "UserID",
						variable_name: "user._id",
						value: userId,
					},
				],
			},
		};

		try {
			const response = await axios.post(
				"https://paystackapi-76lq.onrender.com/api/initiate-payment",
				paymentData
			);
			localStorage.removeItem("cart");
			const authorizationUrl =
				response.data.authorization_url;
			window.location.href = authorizationUrl;
			setIsLoading(false);
		} catch (error) {
			console.error(
				"Error initiating payment:",
				error
			);
		}
	};

	return (
		<>
			{" "}
			<div className='w-screen flex flex-col md:flex md:flex-row h-auto'>
				<div className='md:mt-0 mt-20 md:w-[70vw] w-[100vw]  h-auto flex flex-col bg-white px-10 md:px-32 md:pb-40'>
					<p className='md:text-3xl text-xl font-black leading-10 text-gray-800 pt-3'>
						Cart
					</p>
					{cartProducts.map((item) => (
						<div
							key={item._id}
							className='md:flex md:items-center md:mt-14 mt-8 py-8 border-t border-gray-200'
						>
							<div className='hidden md:flex md:w-1/4'>
								<Image
									src='/images/e1.jpg'
									alt=''
									className='w-full h-full object-center object-cover'
									width={200}
									height={200}
									priority
								/>
							</div>
							<div className='md:pl-3 md:w-3/4'>
								<div className='md:flex md:items-center md:justify-between flex flex-col w-full pt-1'>
									<p className='text-base font-black leading-none text-gray-800'>
										{item.eventName}
									</p>
									<div>
										<label
											htmlFor='Quantity'
											className='sr-only'
										>
											Quantity
										</label>
										<div className='flex mt-8  w-40 md:ml-0 ml-20 md:w-full items-center rounded border border-gray-200'>
											<button
												onClick={() =>
													handleReduceEventQuantity(
														item
													)
												}
												type='button'
												className='size-10 leading-10 text-gray-600 transition hover:opacity-75'
											>
												&minus;
											</button>
											<div className='h-10 w-16 border-transparent pt-3 text-center sm:text-sm focus:outline-none'>
												{
													item.quantity_of_ticket_purchased
												}
											</div>
											<button
												onClick={() =>
													handleIncreaseEventQuantity(
														item
													)
												}
												type='button'
												className='size-10 leading-10 text-gray-600 transition hover:opacity-75'
											>
												+
											</button>
										</div>
									</div>
								</div>
								<div className='flex items-center justify-between pt-5 pr-6'>
									<div className='flex items-center'>
										<button
											onClick={() =>
												handleDeleteEventInCart(
													item
												)
											}
											className='text-xs leading-3 underline text-red-500 pl-5 cursor-pointer'
										>
											Remove
										</button>
									</div>
									<p className='text-base font-black leading-none text-gray-800'>
										{item.ticket_price}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='md:w-[30vw] w-[100vw] md:h-screen h-auto bg-blue-100 bg-opacity-15'>
					<div className='flex flex-col md:h-screen px-14 py-20 overflow-y-auto'>
						<div>
							<p className='md:text-3xl text-lg font-black leading-9 text-gray-800'>
								Summary
							</p>
							<div className='flex items-center justify-between pt-16'>
								<p className='md:text-2xl text-lg leading-normal text-gray-800'>
									Total
								</p>
								<p className='text-2xl font-bold leading-normal text-right text-gray-800'>
									{totalAmount}
								</p>
							</div>
						</div>
						<div>
							<div className='flex pb-6 md:mt-20 mt-8 w-full'>
								<label
									htmlFor='UserEmail'
									className='block text-xs font-medium text-gray-700'
								></label>
								<input
									type='email'
									id='UserEmail'
									placeholder='Your Email'
									className='mt-1 w-full border-gray-200 shadow-sm sm:text-sm'
									value={email}
									onChange={
										handleEmailChange
									}
								/>
							</div>

							{isLoading ? (
								<div className='newtons-cradle ml-10'>
									<div className='newtons-cradle__dot'></div>
									<div className='newtons-cradle__dot'></div>
									<div className='newtons-cradle__dot'></div>
									<div className='newtons-cradle__dot'></div>
								</div>
							) : (
								<button
									onClick={
										initiatePayment
									}
									className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
								>
									Checkout
								</button>
							)}
						</div>
					</div>
				</div>
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

export default Cart;
