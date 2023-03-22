import React from "react";
import FollowSuggest from "./layout/FollowSuggest";
import Sidebar from "./layout/Sidebar";
interface ILayoutProps {
	children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<div className="h-screen bg-black">
			<div className="container h-full max-w-6xl mx-auto xl:px-30">
				<div className="grid grid-cols-4 h-full">
					<Sidebar />
					<div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">{children}</div>
					<div className="px-4 py-3 hidden lg:block">
						<FollowSuggest />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
