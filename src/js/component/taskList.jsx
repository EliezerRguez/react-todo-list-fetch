import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TaskList = ({ list, setList }) => {
	const [newTask, setNewTask] = useState("");

	const changeValue = event => {
		setNewTask(event.target.value);
	};

	const pressEnter = event => {
		if (event.keyCode == 13) {
			let position = list.findIndex(task => task === newTask);
			if (position === -1) {
				setList([...list, newTask]);
				setNewTask("");
			}
		}
	};
	const elementsNumber = list.length;
	const elementsNumberText = list.length !== 1 ? "tasks left" : "task left";

	return (
		<div className="container px-4 pt-3">
			<input
				type="text"
				placeholder="What needs to be done?"
				className="w-100 p-3 bg-transparent border-0 caja"
				id="newTask"
				value={newTask}
				onChange={changeValue}
				onKeyDown={pressEnter}></input>

			<div className="text-start p-3 text-light">
				{elementsNumber} {elementsNumberText}
			</div>
		</div>
	);
};

TaskList.propTypes = {
	list: PropTypes.array,
	setList: PropTypes.func
};

export default TaskList;
