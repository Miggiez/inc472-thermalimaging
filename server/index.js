const express = require("express")
const app = express()
const port = 5100
const imageroute = require("./routes/image")

app.use(express.json())
app.use(
	express.urlencoded({
		extended: true,
	})
)

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	res.setHeader("Access-Control-Allow-Headers", "Content-Type")
	next()
})

app.get("/", (req, res) => {
	res.json({ message: "ok" })
})

app.use("/images", imageroute)

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500
	console.error(err.message, err.stack)
	res.status(statusCode).json({ message: err.message })
	return
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
