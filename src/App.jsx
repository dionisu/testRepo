import  './style.css';
import React from 'react';
import Window from './Window';
import AddTask from './AddTask';
import { useState } from 'react';
import {Route,Routes} from "react-router-dom";
import ListToDos from './ListToDos';
function App(){
  const [state,setState]=useState(false);
    const [userInput,setUserInput]=useState([]);     
    const [click,setClick]=useState(false);

    const handleInput=(e)=>{
        setUserInput([e.target.value]); 
        
    }
  const handleClick = ()=>{
      setState(!state);
  }
  return(
    
    <div className='App'>
    <Routes>
        
        <Route path='/' element={state==true?<AddTask handleClick={handleClick} handleInput={handleInput} userInput={userInput} />:<Window handleClick={handleClick} click={click} />}/>
        
       
        <Route path="/List" element={<ListToDos todo={userInput}/>}/>
</Routes>
        </div>


  )
}
export default App;

