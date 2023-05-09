import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function DogList() {
	const [dogs, setDogs] = useState([])

	useEffect(() => {
		axios
			.get("https://ironrest.fly.dev/api/dog-names")
			.then((response) => {
				console.log(response)
				setDogs(response.data)
			})
			.catch((e) => console.log(e))
	}, [])

	if (!dogs.length) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<div className="container">
				{dogs.map((dog) => {
					return (
						<div key={dog._id}>
							<Link to={`/dogs/${dog._id}`}>
								{dog.name} {dog.species === "dog" ? "🐶" : "😼"}
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default DogList
