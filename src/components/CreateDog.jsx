import React, { useState } from "react"
import axios from "axios"

function CreateDog() {
	const [name, setName] = useState("")

	async function handleSubmit(event) {
		event.preventDefault()
		try {
			const response = await axios.post(
				"https://ironrest.fly.dev/api/dog-names",
				{ name: name, species: getRandomSpecies() }
			)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">
					Name:
					<input
						type="text"
						value={name}
						id="name"
						onChange={(event) => setName(event.target.value)}
					/>
				</label>
			</div>

			<button>Click</button>
		</form>
	)
}

export default CreateDog

function getRandomSpecies() {
	return Math.random() > 0.5 ? "dog" : "cat"
}
