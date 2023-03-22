import React from "react";
import { BsHouseFill, BsBellFill, BsFillPersonFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import TweetButton from "../common/TweetButton";

const Sidebar = () => {
	const sideBarItems = [
		{
			label: "Home",
			href: "/",
			Icon: BsHouseFill,
		},
		{
			label: "Notifications",
			href: "/notifications",
			Icon: BsBellFill,
		},
		{
			label: "Profile",
			href: "/users/123",
			Icon: FaUser,
		},
	];
	return (
		<div className="px-4">
			<div className="flex flex-col items-end lg:items-start mb-2">
				<SidebarLogo />
				<div className="flex flex-col">
					{sideBarItems.map((item) => (
						<SidebarItem key={item.href} {...item} />
					))}
					<SidebarItem Icon={BiLogOut} label="Logout" />
				</div>
			</div>
			<TweetButton />
		</div>
	);
};

export default Sidebar;
