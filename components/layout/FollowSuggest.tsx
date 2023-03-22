import React from "react";
import AccountItem from "../common/AccountItem";

const FollowSuggest = () => {
	return (
		<div className="rounded-2xl px-4 py-3 pb-4 bg-neutral-800">
			<p className="text-white font-semibold mb-3">Who to follow</p>
			<div className="flex flex-col gap-4">
				<AccountItem />
				<AccountItem />
				<AccountItem />
				<AccountItem />
			</div>
		</div>
	);
};

export default FollowSuggest;
