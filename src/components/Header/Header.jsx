import mainImage from "../../assets/images/figma-hero-sm.jpg";

export const Header = () => {
	return (
		<div className="relative">
			<div className="relative font-['Outfit']">
				<img
					className=" h-[400px] object-fill w-screen"
					src={mainImage}
					alt="mainHeroImage"
				/>
				<div className="flex flex-col justify-start absolute top-25 left-17 text-[#121826]">
					<h1 className="font-semibold text-[40px] ">
						Peace, nature, <br /> dream
					</h1>

					<p className="font-normal text-2xl">
						Find and book a great experience.
					</p>
				</div>
			</div>
		</div>
	);
};
