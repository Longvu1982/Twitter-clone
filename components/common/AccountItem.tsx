import React from "react";

const AccountItem = () => {
	return (
		<div className="flex items-center gap-4">
			<div className="h-12 w-12 bg-yellow-300 rounded-full"></div>
			<div className="flex flex-col">
				<p className="text-white leading-3">Janefefqwefqe</p>
				<p className="text-white opacity-30">@jane</p>
			</div>
		</div>
	);
};

export default AccountItem;
