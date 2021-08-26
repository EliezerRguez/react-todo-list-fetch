import React, { useState } from "react";
import TaskList from "./taskList.jsx";
import TaskListElement from "./taskListElement.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState([
		"Dinner at 9pm",
		"Meeting in Helsinki next week"
	]);
	const fecha = new Date();

	const hoy = fecha.toLocaleDateString();

	function deleteTask(taskToRemove) {
		setList(list.filter(task => task !== taskToRemove));
	}

	function modifyTask(newValue, position) {
		let newTasks = [...list];
		newTasks.splice(position, 1, newValue);
		setList(newTasks);
	}

	return (
		<div className="container caja pb-4">
			<h1 className="font-weight-bold pt-3 text-light px-4">
				· TO DO LIST · {hoy}
			</h1>
			<TaskList list={list} setList={setList} />
			{list.map((listTask, index) => (
				<TaskListElement
					key={index}
					task={listTask}
					index={index}
					deleteTask={deleteTask}
					modifyTask={modifyTask}
				/>
			))}
		</div>
	);
};

export default Home;
