import React, { useEffect, useState } from "react";
import TaskList from "./taskList.jsx";
import TaskListElement from "./taskListElement.jsx";

//create your first component
const Home = () => {
	const [list, setList] = useState([{ label: "Comer", done: false }]);

	async function createNewUser() {
		return fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/EliezerRguez",
			{
				method: "POST",
				mode: "cors",
				redirect: "follow",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify([])
			}
		)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
			})
			.catch(function(error) {
				alert("¡Ups! No podemos añadir a ese usuario \n", error);
			});
	}

	async function getApiList() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/EliezerRguez", {
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				console.log(data); //here is were your code should start after the fetch finishes
				setList(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	useEffect(() => {
		createNewUser();
		getApiList();
	}, []);

	async function updateApiList(list) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/EliezerRguez", {
			method: "PUT",
			body: JSON.stringify(list),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}

	useEffect(() => {
		updateApiList(list);
	}, [list]);

	async function deleteList() {
		await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/EliezerRguez",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
		createNewUser();
		setList([]);
	}

	const fecha = new Date();

	const hoy = fecha.toLocaleDateString();

	function deleteTask(taskToRemove) {
		let temp = [...list];
		let filter = temp.filter(task => task.label !== taskToRemove);
		setList(filter);
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
					task={listTask.label}
					index={index}
					deleteTask={deleteTask}
					modifyTask={modifyTask}
				/>
			))}
			<button className="" onClick={deleteList}>
				DELETE ALL
			</button>
		</div>
	);
};

export default Home;
