import React,{useState,useRef, useEffect} from 'react'
import { Todo } from '../model' 
import {AiFillEdit,AiFillDelete,} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './TodoList.css'

type Props={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo= ({todo, todos, setTodos}:Props) => {
 
  const[edit,setEdit]=useState<boolean>(false)
  const[editTodo,setEditTodo]=useState<string>(todo.todo)
    const inputRef=useRef<HTMLInputElement>(null);
    const handleDone=(id:number)=>{
      setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    }
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!=id))
    }
    
    const handleEditSubmit=(e:React.FormEvent,id:number)=>{
      e.preventDefault()
      setTodos(todos.map((item)=>(item.id===id?{...todo,todo:editTodo}:todo)))
      setEdit(!edit)
    }

    // useEffect(()=>{
    //   inputRef.current?.focus()
    // },[edit])

 
 
    return (
   <form action="" className="todosSingle" onSubmit={(e)=>handleEditSubmit(e,todo.id)}>
   {edit?<input ref={inputRef}   value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todosSingleTest' />:todo.isDone?<s className="singleText">{todo.todo}</s>:<span className="singleText">{todo.todo}</span> }
 
    
 
 
 <div>
    <span className="icon" onClick={()=>{
    if(!edit && !todo.isDone){ setEdit(!edit)}}}><AiFillEdit /></span>
    <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
    <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone /></span>
  </div>


   </form>
  )
}

export default SingleTodo
