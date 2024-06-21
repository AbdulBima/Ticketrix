import "@/app/globals.css";
import { CartContextProvider } from "@/components/CartContext";
import DashNav from "@/components/mobileComponents/DashNav";
import SideNav from "@/components/navigation/SideNav";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<DashNav />

				<div className='flex md:flex-row w-screen h-[100vh]'>
					<CartContextProvider>
						<div className='hidden h-[100vh] md:flex w-[20vw] bg-blue-700'>
							<SideNav />
						</div>
						<div className='h-[100vh] md:mt-0 md:w-[80vw] w-[100vw] bg-white'>
							{children}
						</div>
					</CartContextProvider>
				</div>
			</body>
		</html>
	);
}
