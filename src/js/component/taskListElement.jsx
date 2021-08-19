import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TaskListElement = ({ newTask }) => {
	const [icon, setIcon] = useState("d-none");

	function listHover() {
		setIcon("d-block");
	}

	function remove(event) {
		let element = event.target.parentNode.parentNode.parentNode.parentNode;
		element.parentNode.removeChild(element);
	}

	return (
		<div
			className="border-bottom border-light text-white p-3"
			onMouseOver={listHover}>
			<div className="row">
				<div className="col-10">
					<span>Hacer la cama</span>
				</div>
				<div className={`col-2 text-center + ${icon}`}>
					<span onClick={remove}>
						<i className="fas fa-trash-alt"></i>
					</span>
				</div>
			</div>
		</div>
	);
};

TaskListElement.propTypes = {
	newTask: PropTypes.string
};

export default TaskListElement;
