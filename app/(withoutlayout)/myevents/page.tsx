"use client";

import React, {
	useEffect,
	useState,
	useContext,
} from "react";
import TableRow from "@/components/TableRow";
import axios from "axios";
import useTokenVerification from "../../../components/hooks/useTokenVerification";
import Loader from "@/components/Loader";

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
}

const MyEvents = () => {
	const [events, setEvents] = useState<Event[]>([]);
	const { userId, email, error, isLoading } =
		useTokenVerification();

	useEffect(() => {
		const fetchEvents = async () => {
			if (!userId) return;

			try {
				const response = await axios.get(
					`https://backendv2-smz4.onrender.com/api/event/creator/${userId}`
				);
				setEvents(response.data);
			} catch (error) {
				console.error(
					"Error fetching events:",
					error
				);
			}
		};

		fetchEvents();
	}, [userId]);

	if (isLoading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<div className=' md:mt-0 w-full mt-20 px-10'>
			{/* Conditionally render content based on whether events array is empty or not */}
			{events.length === 0 ? (
				<p className='text-xl py-6 landingHeadText text-blue-900'>
					You haven&apos;t created any event
				</p>
			) : (
				<>
					<div className='flex flex-col'>
						<div>
							<h2 className='text-2xl py-10 landingHeadText text-blue-900'>
								My Events
							</h2>
						</div>
					</div>
					<table className=' w-80 divide-y-2 divide-gray-200 bg-white text-sm'>
						{/* Table header */}
						<thead className='ltr:text-left rtl:text-right'>
							<tr>
								<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									Event Name
								</th>
								<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									Date of Event
								</th>
								<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									Location
								</th>
								<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									TP
								</th>
								<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									TB
								</th>
								<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
									TA
								</th>
								<th className='px-4 py-2'></th>
							</tr>
						</thead>

						{/* Table body */}
						<tbody className='divide-y divide-gray-200'>
							{events.map((event, index) => (
								<EventRow
									key={event._id}
									event={event}
								/>
							))}
						</tbody>
					</table>

					{/* <table className="hidden w-80 divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Event Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event._id}>
                 
                 <td className="px-2 py-2 font-medium text-gray-900">{event.eventName}</td>

                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href={`/eventorders/${event.eventCreator}/${event._id}`}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View Orders
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
				</>
			)}
		</div>
	);
};

interface EventRowProps {
	event: Event;
}

const EventRow: React.FC<EventRowProps> = ({ event }) => {
	const [
		totalTicketsPurchased,
		setTotalTicketsPurchased,
	] = useState<number | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`https://backendv2-smz4.onrender.com/api/order/eventticketcount/${event._id}`
				);
				setTotalTicketsPurchased(
					response.data.totalTicketsPurchased
				);
			} catch (error) {
				console.error(
					"Error fetching ticket count:",
					error
				);
			}
		};

		fetchData();
	}, [event._id]);

	return (
		<TableRow
			index={event._id}
			eventId={event._id}
			name={event.eventName}
			dateOfEvent={event.dateOfEvent}
			location={event.location}
			ticket_price={event.ticket_price}
			quantity_of_ticket_purchased={
				totalTicketsPurchased ?? 0
			}
			totalAmount={
				(totalTicketsPurchased ?? 0) *
				event.ticket_price
			}
			eventcreator={event.eventCreator}
		/>
	);
};

export default MyEvents;
