import  './style.css';
import React from 'react';
import Window from './Window';
import AddTask from './AddTask';
import {Route, Routes} from "react-router-dom";
import ListToDos from './ListToDos';

function App() {


  return(
    <div className='App'>
        <Routes>
            <Route path='/' element = {<Window/>}/>
            <Route path='/AddTask' element = {<AddTask/>}/>
            <Route path="/List" element={<ListToDos/>}/>
        </Routes>
    </div>


  )
}
export default App;

