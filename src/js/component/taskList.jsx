import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskListElement from "./taskListElement.jsx";

//create your first component
const TaskList = ({ list, setList }) => {
	const [newTask, setNewTask] = useState("");

	return (
		<div className="container bg-dark w-25 border-bottom border-light p-0">
			<input
				type="text"
				placeholder="What needs to be done?"
				className="w-100 p-3 bg-transparent border-0 text-light"
				id="newTask"
				onChange={event => {
					setNewTask(event.target.value);
				}}
				onKeyPress={event => {
					if (event.keycode === 13) setList([...list, newTask]);
				}}></input>
			{list.map(listTask => (
				<TaskListElement key={listTask} newTask={newTask} />
			))}
		</div>
	);
};

TaskList.propTypes = {
	list: PropTypes.array,
	setList: PropTypes.func
};

export default TaskList;
