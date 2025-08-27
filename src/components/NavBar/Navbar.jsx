import arrowDown from "../../assets/images/Expand_down.svg";

export const Navbar = () => {
	return (
		<>
			<div className="min-w-[329px] min-h-[306px] bg-[#20293A] bg-opacity-95 rounded-lg px-10 py-8 font-['DM Sans'] mb-12 border-1 border-[#4A5567]">
				<div className="grid grid-cols-2 gap-3 text-sm text-[#F2F9FE] font-bold cursor-pointer mb-6 text-center lg:mb-0">
					<a href="#" className="px-3 py-2 bg-[#4A5567] rounded-lg">
						All Stays
					</a>
					<a href="#" className="px-3 py-2 hover:bg-[#4A5567] rounded-lg">
						Norway
					</a>
					<a href="#" className="px-3 py-2 hover:bg-[#4A5567] rounded-lg">
						Finland
					</a>
					<a href="#" className="px-3 py-2 hover:bg-[#4A5567] rounded-lg">
						Sweden
					</a>
					<a
						href="#"
						className="col-span-2 justify-self-center px-3 py-2 hover:bg-[#4A5567] rounded-lg"
					>
						Switzerland
					</a>
				</div>
				<div className="flex flex-col gap-5 justify-center items-center">
					<div className="flex gap-2 justify-center items-center">
						<div className="w-12 h-6 rounded-[20px] bg-[#4E80EE] flex items-center justify-left">
							<div className="w-5 h-5 rounded-full bg-[#F2F9FE] ml-[2px]"></div>
						</div>
						<p className="text-[#F2F9FE] text-xs font-medium">Superhost</p>
					</div>
					<div className="h-[48px] py-3 px-6 border-2 rounded-xl border-[#4A5567] flex gap-3 w-max items-center justify-center">
						<span className="text-[#F2F9FE] text-sm font-semibold">
							Property type
						</span>
						<img className="h-6 w-6" src={arrowDown} alt="expandDown" />
					</div>
				</div>
			</div>
		</>
	);
};
