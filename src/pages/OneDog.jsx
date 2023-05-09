import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"

function OneDog() {
	const [pet, setPet] = useState({})
	const params = useParams()
	console.log(params)
	const navigateTo = useNavigate()
	useEffect(() => {
		axios
			.get("https://ironrest.fly.dev/api/dog-names/" + params.id)
			.then((response) => {
				setPet(response.data)
			})
	}, [])

	function deleteThatStuff() {
		axios
			.delete("https://ironrest.fly.dev/api/dog-names/" + params.id)
			.then((response) => {
				navigateTo(-1)
			})
			.catch((e) => console.log(e))
	}
	return (
		<div>
			<h2>{pet.name}</h2>
			<button onClick={deleteThatStuff}>Delete</button>
			<Link to={`/dogs/update/${pet._id}`}>Edit that pet</Link>
		</div>
	)
}

export default OneDog
