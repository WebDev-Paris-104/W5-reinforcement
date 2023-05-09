import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function UpdatePet() {
	const [name, setName] = useState("")
	const params = useParams()
	const navigateTo = useNavigate()

	useEffect(() => {
		axios
			.get("https://ironrest.fly.dev/api/dog-names/" + params.id)
			.then((response) => {
				console.log("DATA", response.data)
				setName(response.data.name)
			})
	}, [])

	async function handleSubmit(event) {
		event.preventDefault()

		axios
			.patch("https://ironrest.fly.dev/api/dog-names/" + params.id, {
				name: name,
				species: "dog",
			})
			.then((response) => {
				console.log(response)
				navigateTo("/dogs")
			})
			.catch((e) => console.log(e))
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

export default UpdatePet
