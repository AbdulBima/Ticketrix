"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
	const router = useRouter();

	const initialState = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: "",
		marketing_accept: false,
	};

	const [formData, setFormData] = useState(initialState);

	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLInputElement
		>
	) => {
		const { name, type, checked, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Check if password and confirm password match
		if (
			formData.password !==
			formData.password_confirmation
		) {
			// alert(
			// 	"Password and confirm password don't match"
			// );

			toast.error(
				"Password and confirm password don't match",
				{
					position: "top-left",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				}
			);
			return;
		}

		setIsLoading(true);

		try {
			// Send only the password in the form data
			const {
				password,
				...formDataWithoutPasswordConfirmation
			} = formData;
			const response = await axios.post(
				"https://backendv2-smz4.onrender.com/api/eventUser/",
				{
					...formDataWithoutPasswordConfirmation,
					password,
				}
			);

			// Handle success
			handleSuccess(response);
			console.log(response.data);
		} catch (error: any) {
			// Handle error
			if (
				error.response &&
				error.response.status === 400
			) {
				const errorMessage =
					error.response.data &&
					error.response.data.error;

				if (
					errorMessage ===
					"Email is already registered"
				) {
					// alert(
					// 	"Email is already registered. Please log in."
					// );

					toast.error(
						"Email is already registered. Please log in.",
						{
							position: "top-left",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "dark",
						}
					);
				} else {
					// alert(
					// 	errorMessage ||
					// 		"Error creating account"
					// );

					toast.error("Error creating account", {
						position: "top-left",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
				}
			} else {
				console.error(
					"Error creating account:",
					error
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleSuccess = (response: any) => {
		// Handle successful submission, e.g., show a success message or redirect
		// alert(
		// 	"Signup successfull , you will be redirected to the login page shortly"
		// );

		toast.success(
			"Signup successfull , you will be redirected to the login page shortly",
			{
				position: "top-left",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
		);

		setIsLoading(false);
		console.log("User added:", response.data);
		setFormData(initialState); // Reset the form after successful submission
		router.push("/login");
	};
	return (
		<>
			<section className='bg-white'>
				<div className='flex flex-col md:flex md:flex-row'>
					<section className="hidden md:block  md:flex-col h-[100vh] w-[40vw] bg-[url('/images/e1.jpg')] bg-cover bg-center">
						<div className=' md:absolute  md:p-12'>
							<h2 className='landingHeadText md:ml-10 md:pb-10 text-2xl font-bold text-white sm:text-3xl md:text-7xl'>
								Ticketrix
							</h2>
						</div>
					</section>

					<main className='flex relative flex-col h-[100vh] w-[100vw] md:w-[60vw] items-center justify-center px-10  md:px-8 md:py-8  lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
						<div className='max-w-xl lg:max-w-3xl'>
							<div className='relative -mt-16 block lg:hidden'>
								<h2 className='landingHeadText  text-2xl font-bold text-blue-700 sm:text-3xl md:text-5xl'>
									Sign Up
								</h2>
							</div>

							<form
								action='#'
								onSubmit={handleSubmit}
								className='mt-8 grid grid-cols-6 gap-6'
							>
								{/* First Name Input */}
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='FirstName'
										className='block text-sm font-medium text-gray-700'
									>
										First Name
									</label>
									<input
										type='text'
										id='FirstName'
										name='first_name'
										value={
											formData.first_name
										}
										onChange={
											handleChange
										}
										className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									/>
								</div>

								{/* Last Name Input */}
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='LastName'
										className='block text-sm font-medium text-gray-700'
									>
										Last Name
									</label>
									<input
										type='text'
										id='LastName'
										name='last_name'
										value={
											formData.last_name
										}
										onChange={
											handleChange
										}
										className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									/>
								</div>

								{/* Email Input */}
								<div className='col-span-6'>
									<label
										htmlFor='Email'
										className='block text-sm font-medium text-gray-700'
									>
										Email
									</label>
									<input
										type='email'
										id='Email'
										name='email'
										value={
											formData.email
										}
										onChange={
											handleChange
										}
										className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									/>
								</div>

								{/* Password Input */}
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='Password'
										className='block text-sm font-medium text-gray-700'
									>
										Password
									</label>
									<input
										type='password'
										id='Password'
										name='password'
										value={
											formData.password
										}
										onChange={
											handleChange
										}
										className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									/>
								</div>

								{/* Password Confirmation Input */}
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='PasswordConfirmation'
										className='block text-sm font-medium text-gray-700'
									>
										Password
										Confirmation
									</label>
									<input
										type='password'
										id='PasswordConfirmation'
										name='password_confirmation'
										value={
											formData.password_confirmation
										}
										onChange={
											handleChange
										}
										className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									/>
								</div>

								{/* Marketing Accept Checkbox */}
								<div className='col-span-6'>
									<label
										htmlFor='MarketingAccept'
										className='flex gap-4'
									>
										<input
											type='checkbox'
											id='MarketingAccept'
											name='marketing_accept'
											checked={
												formData.marketing_accept
											}
											onChange={
												handleChange
											}
											className='size-5 rounded-md border-gray-200 bg-white shadow-sm'
										/>
										<span className='text-sm text-gray-700'>
											I want to
											receive emails
											about events,
											product updates,
											and company
											announcements.
										</span>
									</label>
								</div>

								{/* Terms and Conditions */}
								<div className='col-span-6'>
									<p className='text-sm text-gray-500'>
										By creating an
										account, you agree
										to our
										<a
											href='#'
											className='text-gray-700 underline'
										>
											terms and
											conditions
										</a>
										and
										<a
											href='#'
											className='text-gray-700 underline'
										>
											privacy policy
										</a>
										.
									</p>
								</div>

								{/* Submit Button */}
								<div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
									{isLoading ? (
										<div className='newtons-cradle  ml-10'>
											<div className='newtons-cradle__dot'></div>
											<div className='newtons-cradle__dot'></div>
											<div className='newtons-cradle__dot'></div>
											<div className='newtons-cradle__dot'></div>
										</div>
									) : (
										<button
											type='submit'
											className='inline-block shrink-0  border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'
										>
											Create an
											account
										</button>
									)}

									{/* Login Link */}
									<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
										Already have an
										account?
										<a
											href='/login'
											className='text-gray-700 underline'
										>
											Log in
										</a>
										.
									</p>
								</div>
							</form>
						</div>
					</main>
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

export default Signup;
