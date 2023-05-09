import React from "react"
import { Link } from "react-router-dom"
function Homepage() {
	return (
		<div>
			<h1>
				<Link to="/dogs">Meet your new best side-kick!</Link>
			</h1>
		</div>
	)
}

export default Homepage
