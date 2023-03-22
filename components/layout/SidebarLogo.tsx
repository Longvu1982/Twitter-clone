import React from "react";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
	return (
		<div className="hover:bg-slate-300 hover:bg-opacity-20 h-auto w-max p-3 flex rounded-full items-center justify-center cursor-pointer transition-all mb-6 mt-1">
			<BsTwitter size={22} color="white" />
		</div>
	);
};

export default SidebarLogo;
