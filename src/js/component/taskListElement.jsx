import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TaskListElement = ({ task, deleteTask }) => {
	function deleteTaskClicked() {
		deleteTask(task);
	}

	return (
		<div className="container px-4">
			<div className="px-4 py-3 mb-4 input">
				<div className="row tarea text-light">
					<div className="col-11 font-weight-bold">
						<span>{task}</span>
					</div>
					<div className="col-1 text-end papelera">
						<span
							className="boton text-light"
							onClick={deleteTaskClicked}>
							<i className="far fa-trash-alt"></i>
						</span>
					</div>
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
