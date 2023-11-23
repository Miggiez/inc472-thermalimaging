import { useState } from "react"
import { Link } from "react-router-dom"
import Ham from "../assets/ham.svg"
import Close from "../assets/close.svg"

export const Navigation = (props) => {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<div className="flex justify-center items-center bg-[#28293B] h-[100px] w-screen">
				<button
					className="w-[40px] absolute left-10 block"
					onClick={() => setOpen(!open)}
				>
					<img src={open ? Close : Ham} />
				</button>

				<h2 className="text-2xl text-white font-bold">{props.pageName}</h2>
			</div>
			<div
				className={`z-50 fixed h-screen w-screen flex flex-col items-center bg-white ${
					open ? "block" : "hidden"
				}`}
			>
				<Link
					className="text-2xl font-bold border border-[#28293B] w-[100%] text-center py-[20px]"
					to="/"
					onClick={() => setOpen(!open)}
				>
					Home
				</Link>
			</div>
		</div>
	)
}
