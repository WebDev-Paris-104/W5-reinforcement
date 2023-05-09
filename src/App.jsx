import "./App.css"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import DogList from "./pages/DogList"
import CreateDog from "./components/CreateDog"
import OneDog from "./pages/OneDog"
import UpdatePet from "./pages/UpdatePet"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route element={<Header />}>
					<Route path="/dogs" element={<DogList />} />
					<Route path="/dogs/:id" element={<OneDog />} />
					<Route path="/dogs/new" element={<CreateDog />} />
					<Route path="/dogs/update/:id" element={<UpdatePet />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
