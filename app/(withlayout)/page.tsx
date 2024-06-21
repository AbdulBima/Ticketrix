"use client";
import CTA from "@/components/deskComponents/CTA";
import DBrand from "@/components/deskComponents/DBrands";
import DHowItWorks from "@/components/deskComponents/DHowItWorks";
import DTestmonials from "@/components/deskComponents/DTestmonials";
import DUpComming from "@/components/deskComponents/DUpComming";
import DWhyUs from "@/components/deskComponents/DWhyUs";
import Dlanding from "@/components/deskComponents/Dlanding";

export default function Home() {
	return (
		<div>
			<Dlanding />
			<DBrand />
			<DWhyUs />
			<DTestmonials />
			<DHowItWorks />
			<DUpComming />
			<CTA />
		</div>
	);
}
