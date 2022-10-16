import  './style.css';
import Logo from './images/Logo.svg'
import { useState } from 'react';
import ListToDos from './ListToDos';
import { Link } from 'react-router-dom';
export default function AddTask({handleClick}){
    const [todo,setTodo]=useState('');
    const [userInput,setUserInput]=useState('');
    const [click,setClick]=useState(true);
    const handleTodos=()=>{
        setTodo(todos=>userInput);
        
    }
    console.log(todo)
    const handleInput=(e)=>{
        setUserInput(e.target.value); 
        handleTodos();
    }
    
    return( 
       
        
         <div className='Panel2'>
    <div className='addTask'>
    
    <p className='pTask'>ADD TASK</p>
        <span className='krest' onClick={()=>handleClick(false)}>X</span>
    </div>
    <div className="addTaskWrapper">
    <img className='image2' src={Logo}></img>
         
            <div className="input-wrapper">
            <p className='Title'>Task</p>
            <input type="text" placeholder='Enter task description' className="input1" value={userInput} onChange={handleInput}/>
            <p className='Title'>Date end</p>
            <input type="text" placeholder='Enter data' className="input1"/>
            </div>
            <Link to="/List">
            <button className='button1'>Add</button>
            </Link>
             
              
            
        </div>
    </div>
    
   
    )
}