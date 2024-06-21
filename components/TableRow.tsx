import React from "react";

interface TableRowProps {
	eventId: string; // Assuming _id is the unique identifier for each event, adjust accordingly
	index: string;
	name: string;
	dateOfEvent: string;
	location: string;
	ticket_price: number;
	quantity_of_ticket_purchased: number;
	totalAmount: number;
	eventcreator: string;
}

const TableRow: React.FC<TableRowProps> = ({
	eventId,
	index,
	name,
	dateOfEvent,
	location,
	ticket_price,
	quantity_of_ticket_purchased,
	totalAmount,
	eventcreator,
}: TableRowProps) => {
	return (
		<tr>
			<td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
				<div className='flex space-y-2 flex-col'>
					<div>{name} </div>
					<a
						href={`/eventorders/${eventcreator}/${eventId}`}
						className='md:hidden deskPara inline-block w-32 rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-center text-white hover:bg-indigo-700'
					>
						View Orders
					</a>
				</div>
			</td>
			<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
				{dateOfEvent}
			</td>
			<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
				{location}
			</td>
			<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
				{ticket_price}
			</td>
			<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
				{quantity_of_ticket_purchased}
			</td>
			<td className='whitespace-nowrap px-4 py-2 text-gray-700'>
				{totalAmount}
			</td>

			<td className='hidden md:block whitespace-nowrap px-4 py-2'>
				<a
					href={`/eventorders/${eventcreator}/${eventId}`}
					className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'
				>
					View Orders
				</a>
			</td>
		</tr>
	);
};

export default TableRow;
