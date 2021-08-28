import React from "react";
import PropTypes from "prop-types";

//create your first component
const TaskListElement = ({ task, deleteTask, modifyTask, index }) => {
	function deleteTaskClicked() {
		deleteTask(task);
	}

	function onTaskChange(event) {
		modifyTask(event.target.value, index);
	}

	return (
		<div className="container">
			<div className="px-4 py-3 mb-4 input">
				<div className="row tarea text-light">
					<div className="col-11 font-weight-bold">
						<input
							type="text"
							value={task}
							onChange={onTaskChange}
							className="w-100 border-0 bg-transparent text-light"></input>
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
	deleteTask: PropTypes.func,
	modifyTask: PropTypes.func,
	index: PropTypes.number
};

export default TaskListElement;
