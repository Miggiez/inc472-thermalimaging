const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = 5100
const imageroute = require("./routes/image")

app.use(express.json())

app.use(
	express.urlencoded({
		extended: true,
	})
)

const corsOptions = {
	origin: "http://localhost:5173",
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use("/images", imageroute)

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500
	console.error(err.message, err.stack)
	res.status(statusCode).json({ message: err.message })
	return
})

mongoose.set("strictQuery", false)
mongoose
	.connect("mongodb://127.0.0.1/inc472db")
	.then(() => {
		console.log("connected to mongoDB")
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})
