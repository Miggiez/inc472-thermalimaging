const express = require("express")
const router = express.Router()
const image = require("../controllers/imagecontroller")

router.get("/:id", image.getImage)

router.post("/newimage", image.postImage)

router.get("/", image.getAllImage)

module.exports = router
