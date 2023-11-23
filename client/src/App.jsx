import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Homepage } from "./pages/HomePage"
import { Images } from "./pages/Images"

function App() {
	const [pageName, setPageName] = useState("")
	return (
		<BrowserRouter>
			<Navigation pageName={pageName} />
			<Routes>
				<Route path="/" element={<Homepage pageName={setPageName} />} />
				<Route path="/image/:id" element={<Images pageName={setPageName} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
