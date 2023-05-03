import React from 'react'
import './TodoList.css'
import SingleTodo from './SingleTodo';
import { Todo } from '../model';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
    {todos.map((item)=>( <SingleTodo todo={item} key={item.id} todos={todos} setTodos={setTodos} />))}
   
    </div>
  )
}

export default TodoList