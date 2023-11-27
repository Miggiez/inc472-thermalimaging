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
		const image = await ThermalImage.find({}, { file: 0 })
		res.status(200).json(image)
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

module.exports = { getImage, getAllImage, postImage }
