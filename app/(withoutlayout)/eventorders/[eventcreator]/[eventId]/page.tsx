"use client";
// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import useTokenVerification from "../../../../../components/hooks/useTokenVerification";
import Loader from "@/components/Loader";

interface MatchedOrder {
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

interface Order {
	orderId: string;
	ordererEmail: string;
	matchedOrder: MatchedOrder;
}

// Define the functional component
const MyOrders = () => {
	// Use the useRouter hook to get the value of the "id" parameter from the URL
	const { eventcreator, eventId } = useParams();
	const [orders, setOrders] = useState<Order[]>([]);
	const { userId, email, error, isLoading } =
		useTokenVerification();

	// Define the fetchOrders function to fetch data based on the "id" parameter
	const fetchOrders = async () => {
		if (!userId) return;

		try {
			//check whether user is loggedIn and is the creator of event
			const response = await axios.get(
				`https://backendv2-smz4.onrender.com/api/order/od/${eventcreator}/${eventId}`
			);
			console.log(response);
			setOrders(response.data);
		} catch (error) {
			console.error("Error fetching orders:", error);
		}
	};

	// Use the useEffect hook to fetch orders when the component mounts
	useEffect(() => {
		if (eventcreator && eventId) {
			fetchOrders();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventcreator, eventId, userId]); // Include "id" in the dependency array to refetch orders when "id" changes

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	// Render the component
	return (
		<div className='overflow-x-hidden w-full md:px-10 px-6 md:mt-0 mt-16 '>
			<div className='overflow-x-hidden md:px-10 '>
				<div className='flex flex-col'>
					<div>
						<h2 className='md:text-4xl ml-6 md:ml-0 text-2xl md:py-16 py-10 landingHeadText text-blue-900'>
							Orders -
						</h2>
					</div>
				</div>
				<table className='hidden md:block w-80 divide-y-2 divide-gray-200 bg-white text-sm'>
					<thead className='ltr:text-left rtl:text-right'>
						<tr>
							{/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Name</th> */}
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
								Customer Email
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
								Order ID
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
								Ticket(s) Purchased
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
								Total Amount
							</th>
							<th className='px-4 py-2'></th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-200'>
						{orders.map((order, index) => (
							<tr
								key={order.matchedOrder._id}
							>
								{/* <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.matchedOrder.eventName}</td> */}
								<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									{order.ordererEmail}
								</td>
								<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									{order.orderId}
								</td>
								<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
									{
										order.matchedOrder
											.quantity_of_ticket_purchased
									}
								</td>
								<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
									{
										order.matchedOrder
											.ticket_price
									}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<table className='md:hidden w-[70vw] px-6 divide-y-2 divide-gray-200 bg-white text-sm'>
					<thead className='ltr:text-left rtl:text-right'>
						<tr>
							{/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Name</th> */}
							{/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Customer Email</th> */}
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
								Order ID
							</th>
							<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
								No. TKT(s)
							</th>
							{/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total Amount</th> */}
							<th className='px-4 py-2'></th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-200'>
						{orders.map((order, index) => (
							<tr
								key={order.matchedOrder._id}
							>
								{/* <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.matchedOrder.eventName}</td> */}
								{/* <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.ordererEmail}</td> */}
								<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									{order.orderId}
								</td>
								<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
									{
										order.matchedOrder
											.quantity_of_ticket_purchased
									}
								</td>
								{/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">{order.matchedOrder.ticket_price}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

// Export the functional component
export default MyOrders;
export const runtime = "edge";
