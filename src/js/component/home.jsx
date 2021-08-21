import React, { useState } from "react";
import TaskList from "./taskList.jsx";
import TaskListElement from "./taskListElement.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	function deleteTask(taskToRemove) {
		setList(list.filter(task => task !== taskToRemove));
	}
	return (
		<body>
			<div className="container caja">
				<div className="row">
					<div className="col-3">
						<h1 className="font-weight-bold pt-3 text-center">
							¿Qué toca hoy?
						</h1>
					</div>
					<div className="col-9">
						<TaskList list={list} setList={setList} />
					</div>
				</div>
				{list.map(listTask => (
					<TaskListElement
						key={listTask}
						task={listTask}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</body>
	);
};

export default Home;
