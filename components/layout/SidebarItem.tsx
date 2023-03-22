import React from "react";
import { IconType } from "react-icons/lib";

interface ISidebarItem {
	label: string;
	href?: string;
	Icon: IconType;
}

const SidebarItem: React.FC<ISidebarItem> = ({ label, href, Icon }) => {
	return (
		<div className="flex items-center px-3 py-3 lg:py-2 cursor-pointer w-max h-auto hover:bg-slate-300 hover:bg-opacity-20 gap-6 rounded-full lg:rounded-2xl mb-6">
			<Icon size={22} color="white" className="" />
			<span className="text-white font-semibold text-base hidden lg:block">{label}</span>
		</div>
	);
};

export default SidebarItem;
