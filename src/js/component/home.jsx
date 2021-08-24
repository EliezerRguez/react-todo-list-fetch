import React, { useState } from "react";
import TaskList from "./taskList.jsx";
import TaskListElement from "./taskListElement.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState([
		"Dinner at 9pm",
		"Meeting in Helsinki next week"
	]);
	function deleteTask(taskToRemove) {
		setList(list.filter(task => task !== taskToRemove));
	}
	return (
		<div className="container caja pb-4">
			<h1 className="font-weight-bold pt-3 text-light text-center">
				· TO DO LIST ·
			</h1>
			<TaskList list={list} setList={setList} />
			{list.map(listTask => (
				<TaskListElement
					key={listTask}
					task={listTask}
					deleteTask={deleteTask}
				/>
			))}
		</div>
	);
};

export default Home;
