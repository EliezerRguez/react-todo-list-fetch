import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskListElement from "./taskListElement.jsx";

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

	function deleteTask(taskToRemove) {
		setList(list.filter(task => task !== taskToRemove));
	}

	return (
		<div className="container bg-dark w-25 border-bottom border-light p-0">
			<input
				type="text"
				placeholder="What needs to be done?"
				className="w-100 p-3 bg-transparent border-0 text-light"
				id="newTask"
				value={newTask}
				onChange={changeValue}
				onKeyDown={pressEnter}></input>
			{list.map(listTask => (
				<TaskListElement
					key={listTask}
					task={listTask}
					deleteTask={deleteTask}
				/>
			))}
			<div className="text-light p-3">
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
