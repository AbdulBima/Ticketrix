"use client";

import {
	createContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

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

interface CartContextType {
	cartProducts: Event[];
	setCartProducts: React.Dispatch<
		React.SetStateAction<Event[]>
	>;
	addEventToCart: (event: Event) => void;
	removeEvent: (event: Event) => void;
	reduceEventQuantityInCart: (event: Event) => void;
	clearCart: () => void;
	totalAmount: number;
}

export const CartContext = createContext<
	CartContextType | undefined
>(undefined);

interface CartContextProviderProps {
	children: ReactNode;
}

export function CartContextProvider({
	children,
}: CartContextProviderProps) {
	const ls =
		typeof window !== "undefined"
			? window.localStorage
			: null;
	const [cartProducts, setCartProducts] = useState<
		Event[]
	>([]);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		if (cartProducts?.length > 0) {
			ls?.setItem(
				"cart",
				JSON.stringify(cartProducts)
			);
		}
	}, [cartProducts, ls]);

	useEffect(() => {
		if (ls && ls.getItem("cart")) {
			setCartProducts(
				JSON.parse(ls.getItem("cart")!) as Event[]
			);
		}
	}, [ls]);

	const addEventToCart = (event: Event) => {
		let findEventInCart = cartProducts.find(
			(item) => item._id === event._id
		);

		if (findEventInCart) {
			let newCart = cartProducts.map((cartItem) => {
				if (cartItem._id === event._id) {
					return {
						...cartItem,
						quantity_of_ticket_purchased:
							cartItem.quantity_of_ticket_purchased +
							1,
						ticket_price:
							(cartItem.ticket_price /
								cartItem.quantity_of_ticket_purchased) *
							(cartItem.quantity_of_ticket_purchased +
								1),
					};
				} else {
					return cartItem;
				}
			});

			setCartProducts(newCart);
			// Assuming `toast` and `toastOptions` are defined
			// toast(`Added ${findProductInCart.name} to cart`, toastOptions);
		} else {
			let addingProduct: Event = {
				...event,
				quantity_of_ticket_purchased: 1,
				ticket_price: event.ticket_price,
			};
			setCartProducts([
				...cartProducts,
				addingProduct,
			]);
			// Assuming `toast` and `toastOptions` are defined
			// toast(`Added ${product.name} to cart`, toastOptions);
		}
	};

	const reduceEventQuantityInCart = (event: Event) => {
		let findEventInCart = cartProducts.find(
			(item) => item._id === event._id
		);

		if (
			findEventInCart &&
			findEventInCart.quantity_of_ticket_purchased > 1
		) {
			let newCart = cartProducts.map((cartItem) => {
				if (cartItem._id === event._id) {
					return {
						...cartItem,
						quantity_of_ticket_purchased:
							cartItem.quantity_of_ticket_purchased -
							1,
						ticket_price:
							(cartItem.ticket_price /
								cartItem.quantity_of_ticket_purchased) *
							(cartItem.quantity_of_ticket_purchased -
								1),
					};
				} else {
					return cartItem;
				}
			});

			setCartProducts(newCart);
			// Assuming `toast` and `toastOptions` are defined
			// toast(`Reduced quantity of ${findProductInCart.name} in cart`, toastOptions);
		} else {
			// Handle the case where the item is not found or its quantity is already 1
			// You may choose to remove the item from the cart in this scenario
		}
	};

	const removeEvent = (event: Event) => {
		const newCart = cartProducts.filter(
			(cartItem) => cartItem._id !== event._id
		);
		setCartProducts(newCart);

		// Check if the new cart is empty and clear local storage
		if (newCart.length === 0 && ls) {
			ls.removeItem("cart");
		}
	};

	const clearCart = () => {
		setCartProducts([]);
	};

	useEffect(() => {
		let newTotalAmount = 0;
		cartProducts.forEach((item) => {
			newTotalAmount += parseInt(
				item.ticket_price.toString(),
				10
			);
		});
		setTotalAmount(newTotalAmount);
	}, [cartProducts]);

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				setCartProducts,
				addEventToCart,
				reduceEventQuantityInCart,
				removeEvent,
				clearCart,
				totalAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
