import { useState } from "react"
import Ham from "../assets/ham.svg"

export const Navigation = () => {
	return (
		<div className="flex justify-center items-center bg-[#28293B] h-[100px] w-screen">
			<img className="w-[40px] absolute left-10" src={Ham} />
			<h2 className="text-2xl text-white font-bold">Home</h2>
		</div>
	)
}
