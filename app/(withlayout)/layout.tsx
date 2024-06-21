
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavBarD from "@/components/navigation/NavBarD";
import MainSiteNav from "@/components/mobileComponents/MainSiteNav";

import Footer from "@/components/navigation/Footer";
import { CartContextProvider } from "@/components/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ticketrix",
	description: "| Create your event ticket",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CartContextProvider>
					<div className='hidden md:block'>
						<NavBarD />
					</div>
					<div className=' md:hidden'>
						<MainSiteNav />
					</div>

					{children}
				</CartContextProvider>

				<Footer />
			</body>
		</html>
	);
}
