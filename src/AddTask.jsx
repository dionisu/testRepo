import  './style.css';
import Logo from './images/Logo.svg'
import { useState,useContext} from 'react';
import ReactDOM from 'react-dom';
import ListToDos from './ListToDos';
import { Link } from 'react-router-dom';
import ToDo from './ToDo';
import { createContext } from 'react';

const component=createContext(<ToDo></ToDo>)

export default function AddTask({handleClick,userInput,handleInput}){ 
    const addToDo=()=>{ 
          
           
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
            <button className='button1' onClick={addToDo}>Add</button>
            </Link>
             
              
            
        </div>
    </div>
    
   
    )
}