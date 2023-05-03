import React, { useRef } from 'react'
import './InputFeild.css'

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}

const InputFeild:React.FC<Props> = ({todo,setTodo,handleAdd} ) => {
 console.log(todo,'todoooo');
 const inputRef=useRef<HTMLInputElement>(null)
  
 
 return (
   <form className='input' onSubmit={(e)=>{
    handleAdd(e)
    inputRef.current?.blur()
   }}>
    <input ref={inputRef} type='input' placeholder='enter the task' className='inputBox' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
<button type='submit'className='inputSubmit'> Set</button>
   </form>
  )
}

export default InputFeild