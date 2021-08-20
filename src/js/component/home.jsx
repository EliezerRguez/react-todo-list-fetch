import React, { useState } from "react";
import TaskList from "./taskList.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	return (
		<div className="container-fluid bg-light">
			<h1 className="text-center">todos</h1>
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Home;
