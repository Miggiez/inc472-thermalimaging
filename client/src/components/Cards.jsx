import { useState } from "react"
import { Link } from "react-router-dom"

export const Cards = (props) => {
	return props.datas.map((data) => (
		<div
			className="flex justify-center items-center w-[100%] md:w-[60%] mt-4"
			key={data.id}
		>
			<Link
				className="flex justify-center items-center w-[100%]"
				to={`image/${data.id}`}
			>
				<div className="flex justify-between items-center bg-[#28293B] w-[85%] text-base text-white font-bold p-[20px] rounded-[10px]">
					<h2>{`image${data.id}`}</h2>
					<h2>{data.timeCreated}</h2>
				</div>
			</Link>
		</div>
	))
}
