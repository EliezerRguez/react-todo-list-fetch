import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TaskList = ({ list, setList }) => {
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExists] = useState(false);

	useEffect(() => {
		let position = list.findIndex(task => task === newTask);
		if (position === -1) {
			setTaskExists(false);
		} else {
			setTaskExists(true);
		}
	}, [newTask]);

	const changeValue = event => {
		setNewTask(event.target.value);
	};

	const addNewTask = event => {
		if (event.keyCode == 13) {
			let position = list.findIndex(task => task.label === newTask);
			if (position === -1) {
				setList([...list, { label: newTask, done: false }]);
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
				className="w-100 p-3 border-0 input text-light"
				id="newTask"
				value={newTask}
				onChange={changeValue}
				onKeyDown={addNewTask}></input>

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
