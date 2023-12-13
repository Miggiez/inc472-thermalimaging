const mongoose = require("mongoose")

const imageSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		file: {
			type: String,
			required: [true, "Please Add file"],
		},
	},
	{ timestamps: true }
)

const ThermalImage = mongoose.model("thermalimages", imageSchema)

module.exports = ThermalImage
