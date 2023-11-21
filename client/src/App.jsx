import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Homepage } from "./pages/HomePage"

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
