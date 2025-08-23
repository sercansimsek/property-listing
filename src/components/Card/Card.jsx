import House from "../../assets/images/Home_duotone.svg";
import User from "../../assets/images/User_alt_duotone.svg";
import Star from "../../assets/images/Starfill.svg";

export const Card = ({ property }) => {
	return (
		<div className="flex flex-col h-[462px] w-[357px] border rounded-md border-[#4A5567] relative bg-[#121826] text-[#F2F9FE] font-[Outfit]">
			<p className="flex gap-1 items-center absolute top-2 left-2 bg-[#20293A] rounded-2xl py-1 px-4 text-[#F2F9FE] text-[10px] font-bold">
				Superhost <img className="h-[13px] w-[13px]" src={Star} alt="star" />
			</p>
			<img
				className="object-cover h-[200px] w-[357px]"
				src={property.image}
				alt={property.title}
			/>
			<div className="p-6">
				<p className="text-left font-bold mb-2 text-base">{property.title}</p>
				<p className="text-left font-light mb-4 text-sm">{property.description}</p>

				<div className="flex gap-6 mb-2 text-xs">
					<div className="flex gap-1 items-center">
						<img className="h-[24px] w-[24px]" src={House} alt="House" />
						<p className="">{`${property.capacity.bedroom} bedroom`}</p>
					</div>

					<div className="flex gap-1 items-center">
						<img className="h-[24px] w-[24px]" src={User} alt="User" />
						<p>{`${property.capacity.people} guests`}</p>
					</div>
				</div>

				<hr className="mb-4 bg-[#4A5567] h-[1px] border-0"/>

				<div className="flex justify-between">
					<p className="text-xl font-bold flex items-baseline">{`$${property.price}`} <p className="text-sm font-light">/night</p>  </p>
					<p className="flex gap-1">
						<img src={Star} alt="star" />
						{property.rating}
					</p>
				</div>
			</div>
		</div>
	);
};
