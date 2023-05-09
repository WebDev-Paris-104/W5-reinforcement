import React from "react"
import { Link, Outlet } from "react-router-dom"

function Header() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/dogs"}>Dog names list</Link>
						</li>
						<li>
							<Link to={"/dogs/new"}>Add a dog</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>Made with care :)</footer>
		</>
	)
}

export default Header
