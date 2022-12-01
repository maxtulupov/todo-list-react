import React, { useState, useEffect } from "react"
import { TodoItem } from "./Item/TodoItem"
import { CreateTodoField } from "./CreateTodoField/CreateTodoField"

// Without localStorage
// const data = [
// 	{
// 		id: 'sdgdfg2',
// 		title: 'Сходить в магазин за продуктами',
// 		isCompleted: false
// 	},
// 	{
// 		id: 'dgdkfg39',
// 		title: 'Прочитать следюущую главу книги',
// 		isCompleted: false
// 	},
// 	{
// 		id: '4654gsds',
// 		title: 'Завершить верстку интернет магазина',
// 		isCompleted: true
// 	}
// ]

export const Home = () => {
	// const [todos, setTodos] = useState(data); Without localStorage
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");
		
		if (savedTodos) {
		  return JSON.parse(savedTodos);
		} else {
		  return [];
		}
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	 }, [todos]);

	const changeTodo = id => {
		const copy = [...todos];
		const current = copy.find(t => t.id === id);
		current.isCompleted = !current.isCompleted;
		setTodos(copy);
	}

	const removeTodo = id => {
		setTodos([...todos].filter(t => t.id !== id));
	}


	return(
		<div className="text-white w-full px-5 mx-auto md:w-3/5">
		<h1 className="text-3xl font-bold text-center mb-8">Todo list</h1>
			<CreateTodoField setTodos={setTodos} />
			{todos.map(todo => <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />)}
		</div>
	)
}