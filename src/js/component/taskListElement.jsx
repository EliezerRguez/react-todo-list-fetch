import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TaskListElement = ({ task, deleteTask }) => {
	function deleteTaskClicked() {
		deleteTask(task);
	}

	return (
		<div className="p-3 caja my-3">
			<div className="row tarea pr-2">
				<div className="col-11">
					<span>{task}</span>
				</div>
				<div className="col-1 text-end papelera ">
					<span
						className="boton text-light"
						onClick={deleteTaskClicked}>
						<i className="far fa-trash-alt"></i>
					</span>
				</div>
			</div>
		</div>
	);
};

TaskListElement.propTypes = {
	task: PropTypes.string,
	deleteTask: PropTypes.func
};

export default TaskListElement;
