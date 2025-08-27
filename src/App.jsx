import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/Navbar";

export const App = () => {
	return (
		<div className="bg-[#121826] flex flex-col justify-center items-center box-border">
			<Header />
			<Navbar />
			<CardList />
		</div>
	);
};
