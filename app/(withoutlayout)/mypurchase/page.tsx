"use client";
import React, {
	useState,
	useEffect,
	useContext,
} from "react";
import axios from "axios";
import useTokenVerification from "../../../components/hooks/useTokenVerification";
import Loader from "@/components/Loader";

interface Order {
	_id: string;
	ordererId: string;
	ordererEmail: string;
	orderAmount: number;
	order: {
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
	}[];
}

const OrdersByOrdererId: React.FC = () => {
	const [orders, setOrders] = useState<Order[]>([]);
	const { userId, email, error, isLoading } =
		useTokenVerification();

	useEffect(() => {
		const fetchOrders = async () => {
			if (!userId) return;

			const url = `https://backendv2-smz4.onrender.com/api/order/orders/${userId}`;

			try {
				const response = await axios.get<Order[]>(
					url
				);
				setOrders(response.data);
			} catch (error) {
				console.error(
					"Error fetching orders:",
					error
				);
			}
		};

		fetchOrders();
	}, [userId]);

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<div className='md:ml-20 ml-10 w-full mt-20'>
			<h2 className='md:text-2xl text-lg landingHeadText text-blue-900'>
				My Orders
			</h2>

			{orders.length === 0 ? (
				<p className='md:text-xl text-sm py-8 landingHeadText text-blue-900'>
					No orders found
				</p>
			) : (
				orders.map((order, index) => (
					<div
						key={order._id}
						className='md:mt-10 mt-4 '
					>
						<div className='flex flex-row space-x-20'>
							<h2 className='whitespace-nowrap md:text-xl text-lg py-8 landingHeadText text-blue-900'>
								Order: {index + 1}
							</h2>
							<h2 className='whitespace-nowrap md:text-xl text-lg py-8 landingHeadText text-blue-900'>
								Order ID: {order._id}
							</h2>
						</div>
						<table className='w-80 divide-y-2 divide-blue-200 bg-white text-sm'>
							<thead className='ltr:text-left rtl:text-right'>
								<tr>
									<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
										Event Name
									</th>
									<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
										Event Location
									</th>
									<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
										Date of Event
									</th>
									<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
										Ticket(s) Purchased
									</th>
									<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
										Total Amount
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200'>
								{order.order.map(
									(
										orderItem,
										itemIndex
									) => (
										<tr
											key={
												orderItem._id
											}
										>
											<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
												{
													orderItem.eventName
												}
											</td>
											<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
												{
													orderItem.location
												}
											</td>
											<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
												{
													orderItem.dateOfEvent
												}
											</td>
											<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
												{
													orderItem.quantity_of_ticket_purchased
												}
											</td>
											<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
												{
													orderItem.ticket_price
												}
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>
					</div>
				))
			)}
		</div>
	);
};

export default OrdersByOrdererId;
