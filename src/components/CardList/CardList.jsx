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
			<ul className="flex flex-col gap-[72px]">
				{properties.map((property) => (
					<li key={property.id}>{<Card property={property} />}</li>
				))}
			</ul>
		</div>
	);
};
