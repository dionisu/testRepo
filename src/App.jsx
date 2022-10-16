import  './style.css';
import React from 'react';
import Window from './Window';
import AddTask from './AddTask';
import { useState } from 'react';
import {Route,Routes} from "react-router-dom";
import ListToDos from './ListToDos';
function App(){
  const [state,setState]=useState(false);
  
  const handleClick = ()=>{
      setState(!state);
  }
  return(
    <div className='App'>
        <div className="wrapper">
        {state==true?<AddTask handleClick={handleClick} />:<Window handleClick={handleClick}/>}
        </div>
        <Routes>
        <Route path="/List" element={<ListToDos/>}/>
</Routes>
        </div>
       

  )
}
export default App;

