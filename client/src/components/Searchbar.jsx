import { useState } from "react"

export const SearchBar = () => {
	return (
		<div className="flex justify-center items-center mt-4 w-[100%]">
			<div className="flex justify-center items-center w-[85%] border-4 border-[#28293B] rounded-[10px] p-[10px]">
				<input
					className="outline-none font-bold w-[100%] text-2xl p-[5px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					type="text"
				/>
				<input
					className="text-base font-bold text-white bg-[#28293B] p-[10px] rounded-[10px]"
					value="Search"
					type="submit"
				/>
			</div>
		</div>
	)
}
