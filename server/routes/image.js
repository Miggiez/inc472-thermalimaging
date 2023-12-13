const express = require("express")
const router = express.Router()
const image = require("../controllers/imagecontroller")

router.get("/:id", image.getImage)

router.post("/newimage", image.postImage)

router.delete("/deleteimage/:id", image.deleteImage)

router.post("/", image.getAllImage)

module.exports = router
