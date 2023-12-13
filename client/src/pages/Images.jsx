import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Images = (props) => {
	const navigate = useNavigate()
	const [image, setImage] = useState({ file: "", createdAt: "" })
	const [message, setMessage] = useState("")

	const { id } = useParams()

	const handleFetch = async () => {
		try {
			const res = await fetch(`http://localhost:5100/images/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
			res.json().then((data) => {
				setImage({ file: data.file, createdAt: data.createdAt })
			})
		} catch (err) {
			console.log(err)
		}
	}

	const handleDeleteImage = async (e) => {
		e.preventDefault()
		try {
			const res = await fetch(
				`http://localhost:5100/images/deleteimage/${id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			res.json().then((data) => {
				setMessage(data.message)
				navigate("/")
			})
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		props.pageName("Image")
	}, [])

	useEffect(() => {
		handleFetch()
	}, [])

	return (
		<div className="flex flex-col items-center">
			<div className="flex justify-center items-center border-4 border-dashed border-black w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-[10px] mt-10">
				{/* <h2 className="text-3xl font-bold text-black">Image</h2> */}
				<img
					className="w-[90%] h-[90%]"
					src={`data:image/jpeg;base64,${image.file}`}
					alt=""
				/>
			</div>
			<h2 className="text-3xl font-bold text-[#28293B] mt-10">{`${id}`}</h2>
			<h2 className="text-2xl text-[#28293B] mt-5">{image.createdAt}</h2>
			<button
				className="text-2xl bg-red-400 text-center text-white font-bold p-3 mt-5 rounded-[10px]"
				onClick={handleDeleteImage}
			>
				Delete
			</button>
		</div>
	)
}
