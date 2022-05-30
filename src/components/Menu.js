import React, { Component } from "react";
import {Link} from "react-router-dom";
class Menu extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="navbar-brand" >
					Navbar
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						aaaa
					</li>
				</ul>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#nav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="nav">
					<ul className="navbar-nav bg-light m-0 ml-lg-auto p-3 p-lg-0">
						<li className="d-inline d-lg-none">
							<button
								data-toggle="collapse"
								data-target="#nav"
								className="close float-right"
							>
								&times;
							</button>
						</li>
						<li className="nav-item">
							About
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Menu;
