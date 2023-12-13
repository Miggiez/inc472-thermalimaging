const ThermalImage = require("../models/ThermalImageModel")

const getImage = async (req, res) => {
	try {
		const { id } = req.params
		const image = await ThermalImage.findById(id)
		res.status(200).json(image)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const getAllImage = async (req, res) => {
	try {
		const { search } = req.body
		if (search == "" || search == undefined) {
			const image = await ThermalImage.find({}, { file: 0 })
			res.status(200).json(image)
		} else {
			const image = await ThermalImage.find(
				{ name: { $regex: search } },
				{ file: 0 }
			)
			if (image) {
				res.status(200).json(image)
			} else {
				res.status(404).json({ message: "Image not found" })
			}
		}
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const postImage = async (req, res) => {
	try {
		const image = await ThermalImage.create(req.body)
		res.status(200).json(image)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const deleteImage = async (req, res) => {
	try {
		const { id } = req.params
		await ThermalImage.deleteOne({ _id: id })
		res.status(200).json({ message: "successfully removed image in database" })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

module.exports = { getImage, getAllImage, postImage, deleteImage }
