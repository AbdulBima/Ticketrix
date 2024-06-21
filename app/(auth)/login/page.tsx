"use client";
import React, {
	useState,
	ChangeEvent,
	FormEvent,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
	});

	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleChange = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};
	const handleSubmit = async (
		e: FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post(
				"https://backendv2-smz4.onrender.com/api/eventUser/login",
				formData,
				{
					withCredentials: true,
				}
			);

			// Check for successful login
			if (response.status === 200) {
				// Store token in local storage
				localStorage.setItem(
					"token",
					response.data.token
				);

				router.prefetch("/dashboard");
				// alert(
				// 	"Login successful, you will be redirected to your dashboard shortly"
				// );

				toast.success(
					"Login successful, you will be redirected to your dashboard shortly",
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

				router.push("/dashboard");
			} else {
				const errorMessage =
					response.data.error ||
					"Please check username and password";
				// alert(errorMessage);

				toast.error(errorMessage, {
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
		} catch (error) {
			console.error("Error logging in:", error);
			// alert(
			// 	"Error logging in. Please try again, thank you."
			// );

			toast.error(
				"Error logging in. Please try again, thank you.",
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
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<section className='bg-white h-[70vh] lg:h-[100vh] fixed lg:overscroll-y-none '>
				<div className='flex flex-col lg:flex lg:flex-row'>
					<section className="hidden lg:block  lg:flex-col h-[100vh] w-[40vw] bg-[url('/images/e2.jpg')] bg-cover bg-center">
						<div className=' lg:absolute  lg:p-12'>
							<h2 className='landingHeadText lg:ml-10 lg:pb-10 text-2xl font-bold text-white sm:text-3xl lg:text-7xl'>
								Ticketrix
							</h2>
						</div>
					</section>

					<main className='flex relative flex-col h-[70vh] lg:h-[100vh] w-[100vw] lg:w-[60vw] items-center py-10 justify-center  lg:col-span-7 lg:px-16  xl:col-span-6'>
						<h2 className='absolute top-20 lg:hidden landingHeadText lg:ml-10 lg:pb-10 text-lg  text-blue-700 sm:text-xl lg:text-7xl'>
							- Ticketrix -
						</h2>
						<div className='mt-16 lg:mt-0 w-[95vw] lg:w-[80vw] h-[80vh] lg:px-28 lg:py-20 px-10 py-40  lg:max-w-3xl lg:shadow-none'>
							
							<div className="flex flex-col space-y-4 mb-10 deskPara lg:flex-row lg:space-y-0 lg:space-x-16">
							<h2 >Test email: brahim@gmail.com</h2>
							<h2>Test password: 123456789</h2>

							</div>
		

							<h2 className=' landingHeadText mt-8 text-blue-700 text-3xl lg:text-5xl'>
								Login
							</h2>
							<form
								action='#'
								onSubmit={handleSubmit}
								className='mt-8 grid grid-cols-6 gap-6'
							>
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
										className='mt-1 w-full lg:w-[20vw] border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
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
										className='mt-1 w-full  border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
									/>
								</div>

								{/* Submit Button */}
								<div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
									{isLoading ? (
										<div className='newtons-cradle ml-10'>
											<div className='newtons-cradle__dot'></div>
											<div className='newtons-cradle__dot'></div>
											<div className='newtons-cradle__dot'></div>
											<div className='newtons-cradle__dot'></div>
										</div>
									) : (
										<button
											type='submit'
											className='inline-block shrink-0  border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:opacity-85 hover:text-blue-200 focus:outline-none focus:ring active:text-blue-500'
										>
											Login
										</button>
									)}

									<p className='mt-4 text-sm text-gray-500 sm:mt-0 lg:ml-6'>
										Don&apos;t have an
										account?
										<a
											href='/signup'
											className='text-gray-700 underline ml-2 '
										>
											Sign Up
										</a>
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

export default Login;
