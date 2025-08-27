import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/Navbar";

export const App = () => {
	return (
		<div className="bg-[#121826] flex flex-col justify-center items-center box-border">
			<div className="relative">
				<Header />
				<div className="absolute top-90 left-10">
					<Navbar />
				</div>
			</div>
			<div className="mt-80">
				<CardList />
			</div>
		</div>
	);
};
