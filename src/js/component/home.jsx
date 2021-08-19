import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-light">
			<h1 className="text-center">todos</h1>
			<div className="container bg-dark w-25 p-2 border-bottom border-light">
				<input
					type="text"
					placeholder="What needs to be done?"
					className="w-100 p-2 bg-transparent border-0"></input>
				<ul>
					<li className="border-bottom border-light text-white py-2 ml-2">
						Hacer la cama
						<span>
							<i className="fas fa-trash-alt"></i>
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
