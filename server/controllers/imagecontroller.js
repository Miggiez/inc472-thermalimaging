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

module.exports = { getImage }
