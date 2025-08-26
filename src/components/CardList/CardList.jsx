import { useEffect, useState } from "react";
import { getData } from "../../data/api";
import { Card } from "../Card/Card";
import mainImage from "../../assets/images/hero-image-sm.jpg";

export const CardList = () => {
	const [properties, setProperties] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const loadData = async () => {
		try {
			const dataFromServer = await getData();
			setProperties(dataFromServer);
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	console.log(errorMessage);

	return (
		<div>
			<div className="relative ">
				<img className="max-w-[412px] h-[511px] object-fill object-center" src={mainImage} alt="mainHeroImage" />
				<div className="flex flex-col justify-start absolute inset-18 text-[#121826]">
					<h1 className="font-bold text-[40px] ">
						Peace, nature, <br /> dream
					</h1>

					<p className="font-medium text-2xl">Find and book a great experience</p>
				</div>
			</div>
			<ul className="flex flex-col gap-6">
				{properties.map((property) => (
					<li key={property.id}>{<Card property={property} />}</li>
				))}
			</ul>
		</div>
	);
};
