import { Link } from "react-router-dom"

export const Cards = (props) => {
	const newDate = (createdDate) => {
		let date = new Date(createdDate)
		date = date.toLocaleString()
		return date
	}
	return props.datas.map((data) => (
		<div
			className="flex justify-center items-center w-[100%] md:w-[60%] mt-4"
			key={data._id}
		>
			<Link
				className="flex justify-center items-center w-[100%]"
				to={`image/${data._id}`}
			>
				<div className="flex justify-between items-center bg-[#28293B] w-[85%] txt-sm text-white font-bold p-[20px] rounded-[10px]">
					<h2>{`${data.name}`}</h2>
					<h2>{newDate(data.createdAt)}</h2>
				</div>
			</Link>
		</div>
	))
}
