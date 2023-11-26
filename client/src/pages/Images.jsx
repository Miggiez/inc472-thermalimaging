import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Images = (props) => {
	const [image, setImage] = useState({ file: "" })

	useEffect(() => {
		props.pageName("Image")
	}, [])

	useEffect(async () => {
		await fetch("http://localhost:5100/55", (data) => {
			console.log(data)
			setImage({ file: data })
		})
	}, [])

	const { id } = useParams()
	return (
		<div className="flex flex-col items-center">
			<div className="flex justify-center items-center border-4 border-dashed border-black w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-[10px] mt-10">
				{/* <h2 className="text-3xl font-bold text-black">Image</h2> */}
				<img src={image.file} />
			</div>
			<h2 className="text-3xl font-bold text-[#28293B] mt-10">{`image${id}`}</h2>
			<h2 className="text-2xl text-[#28293B] mt-5">2023-11-17:14:27:00:00</h2>
		</div>
	)
}
