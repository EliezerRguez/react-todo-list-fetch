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
	return (
		<div className="container caja pb-4">
			<div className="row">
				<div className="col-12 col-sm-3 pt-5">
					<div className="text-center text-secondary">
						<i className="far fa-calendar-alt"></i>
						<p className="text-light mt-4">{hoy}</p>
					</div>
				</div>
				<div className="col-12 col-sm-9">
					<h1 className="font-weight-bold pt-3 text-light px-4">
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
			</div>
		</div>
	);
};

export default Home;
