import { CardList } from "./components/CardList/CardList";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/NavBar/Navbar";

export const App = () => {
	return (
		<div className="bg-[#121826] flex flex-col justify-center items-center box-border pb-30 ">
			<div className="relative">
				<Header />
				<div className="absolute top-90 left-10 lg:top-140 lg:left-25 xl:top-183 xl:left-35">
					<Navbar />
				</div>
			</div>
			<div className="mt-80 lg:mt-25">
				<CardList />
			</div>
		</div>
	);
};
