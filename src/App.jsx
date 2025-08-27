import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";

export const App = () => {
	return (
		<div className="bg-[#121826]">
			<Header />
			<CardList />
		</div>
	);
};
