import { useState } from "react"
import { SearchBar } from "../components/Searchbar"
import { Cards } from "../components/Cards"

export const Homepage = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<SearchBar />
			<div className="mt-10 w-[100%]">
				<h2 className="text-xl font-bold text-[#28293B] relative left-10">
					Images
				</h2>
			</div>

			<div className="w-[80%] flex justify-between items-center">
				<h2 className="mt-10 text-xs font-bold text-[#28293B]">Image Name</h2>
				<h2 className="mt-10 text-xs font-bold text-[#28293B]">
					Date and Time Created
				</h2>
			</div>
			<Cards />
		</div>
	)
}
