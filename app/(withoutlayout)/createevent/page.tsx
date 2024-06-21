"use client";
import React, {
	useState,
	ChangeEvent,
	FormEvent,
	useContext,
} from "react";
import axios from "axios";
import Image from "next/image";
import useTokenVerification from "../../../components/hooks/useTokenVerification";
import Loader from "@/components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Event {
	eventName: string;
	eventCreator: string | null;

	dateOfEvent: string;
	location: string;
	ticket_price: number;
	quantity_of_ticket: number;
	quantity_of_ticket_purchased: number;

	description: string;
}

const initialState: Event = {
	eventName: "",
	eventCreator: "",
	dateOfEvent: "",
	location: "",
	ticket_price: 0,
	quantity_of_ticket: 0,
	quantity_of_ticket_purchased: 0,
	description: "",
};

const AddEventForm: React.FC = () => {
	const { userId, email, error, isLoading } =
		useTokenVerification();

	const [formData, setFormData] =
		useState<Event>(initialState);
	const [isFLoading, setIsFLoading] = useState(false);

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (
		e: FormEvent<HTMLFormElement>
	) => {
		setIsFLoading(true);
		e.preventDefault();

		const formDataWithCreator: Event = {
			...formData,
			eventCreator: userId,
		};

		try {
			const response = await submitFormData(
				formDataWithCreator
			);
			handleSuccess(response);
		} catch (error) {
			handleError(error);
		}
	};

	const submitFormData = async (
		data: Event
	): Promise<any> => {
		return await axios.post(
			"https://backendv2-smz4.onrender.com/api/event/",
			data
		);
	};

	const handleSuccess = (response: any) => {
		// Handle successful submission, e.g., show a success message or redirect
		// alert("Event Created");

		toast.success("Event Created", {
			position: "top-left",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
		setIsFLoading(false);
		console.log("Event added:", response.data);
		setFormData(initialState); // Reset the form after successful submission
	};

	const handleError = (error: any) => {
		console.error("Error adding event:", error);
		setIsFLoading(false);

		// Handle errors as needed
	};

	return (
		<>
			<div className='w-full flex flex-col mt-16 px-0 md:px-80 h-screen md:overflow-y-auto bg-white '>
				<div className='flex items-center flex-col md:mt-10 mt-8'>
					<div>
						<h2 className='text-2xl md:text-4xl landingHeadText text-blue-900'>
							Create Event
						</h2>
					</div>
				</div>
				<section>
					<div className='relative  px-10 flex justify-center lg:px-0 md:px-12'>
						<div className='relative z-10 flex flex-col flex-1 py-10 bg-white  lg:py-8 md:flex-none md:px-28 sm:justify-center'>
							<div className=' ml-4 md:px-0 md:w-96 '>
								<form
									onSubmit={handleSubmit}
								>
									<input
										autoComplete='false'
										name='hidden'
										style={{
											display: "none",
										}}
									/>
									<input
										name='_redirect'
										type='hidden'
										value='#'
									/>
									<div className='mt-4 space-y-6'>
										<div>
											<label
												className='block mb-3 text-sm font-medium text-gray-600'
												htmlFor='name'
											>
												Event Name
											</label>
											<input
												className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
												placeholder='Event Name'
												aria-label='Event Name'
												type='text'
												id='eventName'
												name='eventName'
												value={
													formData.eventName
												}
												onChange={
													handleChange
												}
												required
											/>
										</div>
										<div className='col-span-full'>
											<label
												className='block mb-3 text-sm font-medium text-gray-600'
												htmlFor='date'
											>
												Date of
												Event
											</label>

											<input
												className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
												placeholder='2024-12-28'
												aria-label='date Of Event'
												type='text'
												id='dateOfEvent'
												name='dateOfEvent'
												value={
													formData.dateOfEvent
												}
												onChange={
													handleChange
												}
												required
											/>
										</div>
										<div className='col-span-full'>
											<label
												className='block mb-3 text-sm font-medium text-gray-600'
												htmlFor='location'
											>
												Location
											</label>
											<input
												className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
												placeholder='location'
												aria-label='Location'
												type='text'
												id='Location'
												name='location'
												value={
													formData.location
												}
												onChange={
													handleChange
												}
												required
											/>
										</div>

										<div>
											<div>
												<label
													className='block mb-3 text-sm font-medium text-gray-600'
													htmlFor='description'
												>
													Event
													Description
												</label>
												<div className='mt-1'>
													<textarea
														className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
														placeholder='Describe Your Event'
														aria-label='Description'
														id='Description'
														name='description'
														value={
															formData.description
														}
														onChange={
															handleChange
														}
														required
														rows={
															4
														}
													></textarea>
												</div>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												className='block mb-3 text-sm font-medium text-gray-600'
												htmlFor='amount'
											>
												Ticket
												Amount
											</label>

											<input
												className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
												placeholder=''
												aria-label='Ticket'
												type='number'
												id='Ticketprice'
												name='ticket_price'
												value={
													formData.ticket_price
												}
												onChange={
													handleChange
												}
												required
											/>
										</div>
										<div className='col-span-full'>
											<label
												className='block mb-3 text-sm font-medium text-gray-600'
												htmlFor='quantity'
											>
												Quantity of
												Tickets
											</label>
											<input
												className='block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
												placeholder='Quantity'
												aria-label='Quantity'
												type='number'
												id='Quantity'
												name='quantity_of_ticket'
												value={
													formData.quantity_of_ticket
												}
												onChange={
													handleChange
												}
												required
											/>
										</div>
										<div className='col-span-full'>
											{isFLoading ? (
												<div className='newtons-cradle  ml-10'>
													<div className='newtons-cradle__dot'></div>
													<div className='newtons-cradle__dot'></div>
													<div className='newtons-cradle__dot'></div>
													<div className='newtons-cradle__dot'></div>
												</div>
											) : (
												<button
													className='items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-blue-900    hover:bg-transparent hover:border-blue-900 hover:text-blue-900 focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black'
													type='submit'
												>
													Submit
												</button>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
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

export default AddEventForm;
