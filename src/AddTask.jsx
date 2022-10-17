import  './style.css';
import Logo from './images/Logo.svg'

import ReactDOM from 'react-dom';
import {createRef} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ToDo from './ToDo';
import ListToDos from './ListToDos';
import {addTask} from "./store/reducer";

export default function AddTask(){ 

    const taskDescriptionRef = createRef();
    const taskDateRef = createRef();
    const dispatch = useDispatch();

    const addToDo = () => {
        const newTask = {
            taskDescription: taskDescriptionRef.current.value,
            taskDate: taskDateRef.current.value,
            finished: false,
        }
        dispatch(addTask(newTask));
    }

    return (
        
        <div className='Panel2'>
            <div className='addTask'>
                <p className='pTask'>ADD TASK</p>
                <Link to="/">
                    <span className='krest'>X</span>
                </Link>
            </div>
            <div className="addTaskWrapper">
                <img className='image2' src={Logo} alt="" />
                <div className="input-wrapper">
                    <p className='Title'>Task</p>
                    <input ref = {taskDescriptionRef} type="text" placeholder='Enter task description' className="input1" />
                    <p className='Title'>Date end</p>
                    <input ref = {taskDateRef} type="text" placeholder='Enter data' className="input1"/>
                </div>
                <Link to="/List">
                    <button className='button1' onClick={addToDo}>Add</button>
                </Link>
        </div>
        
    </div>
    )
}