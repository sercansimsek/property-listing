import { useEffect, useState } from "react";
import { getData } from "../../data/api";
import { Card } from "../Card/Card";

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
			<div className="text-[#F2F9FE] text-2xl font-bold mb-8 flex justify-start px-4">
				Over 200 stays
			</div>

			<ul className="grid grid-cols-1 gap-[72px] lg:grid-cols-2 xl:grid-cols-3">
				{properties.map((property) => (
					<li key={property.id}>{<Card property={property} />}</li>
				))}
			</ul>
		</div>
	);
};
