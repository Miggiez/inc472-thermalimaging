import { useEffect } from "react"
import { SearchBar } from "../components/Searchbar"
import { Cards } from "../components/Cards"

export const Homepage = (props) => {
	useEffect(() => {
		props.pageName("Home")
	}, [])

	const pittingCorrosion = [
		{
			id: 4,
			timeCreated: "2023-11-17:14:27:00:00",
		},
		{
			id: 3,
			timeCreated: "2023-11-17:14:27:00:00",
		},
		{
			id: 2,
			timeCreated: "2023-11-17:14:27:00:00",
		},
		{
			id: 1,
			timeCreated: "2023-11-17:14:27:00:00",
		},
	]

	return (
		<div className="flex flex-col items-center justify-center overflow-x-hidden">
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
			<Cards datas={pittingCorrosion} />
		</div>
	)
}
