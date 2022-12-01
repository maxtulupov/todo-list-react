import React from "react"
import { Check } from "./Check"
import cn from "classnames"
import { BsTrash } from "react-icons/bs"

export const TodoItem = ({todo, changeTodo, removeTodo}) => {
	return(
		<div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
			<button className="flex items-center flex-1" onClick={() => changeTodo(todo.id)}>
				<Check isCompleted={todo.isCompleted} />
				<span className={cn({
					'line-through': todo.isCompleted,
					})}>{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo.id)} >
				<BsTrash size={22} className="text-wh hover:text-red-600 transition-colors ease-in-out duration-300"/>
			</button>
		</div>
	)
}