import React from "react";

const TweetButton = () => {
	return (
		<div className="hidden lg:flex items-center justify-center w-full h-12 bg-sky-500 rounded-full font-semibold cursor-pointer hover:bg-opacity-80 transition-all">
			<span className="text-white">Tweet</span>
		</div>
	);
};

export default TweetButton;
