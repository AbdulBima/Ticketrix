import "@/app/globals.css";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body>
				<div className='flex flex-row w-screen h-screen'>
					{children}
				</div>
			</body>
		</html>
	);
}
