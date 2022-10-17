import  './style.css';
import Logo from './images/Logo.svg'
import { Outlet, Link } from "react-router-dom";
import {ToDo} from './ToDo';

import { useSelector } from 'react-redux';

export default function ListToDos() {

    const todoState = useSelector(state => state);
    
    return(
        <div className="wrapper">
            <div className='List'>
                <div className="blackBlock">
                    <img className="logo1" src={Logo} alt="" />
                </div>
                <div className="headerList">
                    <p className='pList'>{todoState.tasks.length} Todos </p>
                    <p className='pView'>View all</p>
                </div>
                <div className="DateTask">
                    <div className="square" />
                    <p className='date'>Date</p>
                    <p className='task'>Task</p>
                </div>
                {todoState.tasks.map((item, index) => 
                    <ToDo 
                        key = {"keyNum_" + index + item.taskDescription + item.taskDate}
                        description = {item.taskDescription}
                        date = {item.taskDate}
                        finished = {item.finished}
                    /> )
                    }

                <div className='ToDo'>
                    <div className="toDoSquare" />
                    <p className="toDoDate"/>
                    <p className="toDoTask" />
                </div>
            </div>
        </div>)
}