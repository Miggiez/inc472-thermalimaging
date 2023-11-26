const express = require("express")
const router = express.Router()
const image = require("../controllers/imagecontroller")

router.get("/", async (req, res) =>
	res.status(200).json({ message: "Everything is working" })
)

router.get("/:id", image.getImage)

module.exports = router
