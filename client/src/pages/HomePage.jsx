import { useEffect, useState } from "react"
import { SearchBar } from "../components/Searchbar"
import { Cards } from "../components/Cards"

export const Homepage = (props) => {
	const [data, setData] = useState([])
	const [search, setSearch] = useState("")

	const handleFetch = async () => {
		try {
			const res = await fetch(`http://localhost:5100/images/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ search: search }),
			})
			res.json().then((data) => {
				setData(data)
			})
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		props.pageName("Home")
	}, [])

	useEffect(() => {
		handleFetch()
	}, [search])

	return (
		<div className="flex flex-col items-center justify-center overflow-x-hidden">
			<SearchBar search={setSearch} />
			<div className="mt-10 w-[100%] md:flex md:justify-center">
				<h2 className="text-xl font-bold text-[#28293B] relative left-10 md:static">
					Images
				</h2>
			</div>

			<div className="w-[80%] md:w-[50%] flex justify-between items-center">
				<h2 className="mt-10 text-xs font-bold text-[#28293B]">Image Name</h2>
				<h2 className="mt-10 text-xs font-bold text-[#28293B]">
					Date and Time Created
				</h2>
			</div>
			<Cards datas={data} />
		</div>
	)
}
