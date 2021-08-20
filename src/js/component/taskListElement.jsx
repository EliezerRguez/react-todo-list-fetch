import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TaskListElement = ({ task, deleteTask }) => {
	function deleteTaskClicked() {
		deleteTask(task);
	}

	return (
		<div className="text-light p-3">
			<div className="row">
				<div className="col-10">
					<span>{task}</span>
				</div>
				<div className="col-2 text-end">
					<span onClick={deleteTaskClicked}>
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
