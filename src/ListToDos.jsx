import  './style.css';
import Logo from './images/Logo.svg'
import { Outlet, Link } from "react-router-dom";
import ToDo from './ToDo';
export default function ListToDos({todo}){
    return(
        <div className="wrapper"><div className='List'>
        <div className="blackBlock">
            <img className="logo1" src={Logo}></img>
        </div>
       <div className="headerList">
    <p className='pList'>8 Todos </p>
    <p className='pView'>View all</p>
       </div>
       <div className="DateTask">
        <div className="square">

        </div>
        <p className='date'>Date</p>
        <p className='task'>Task</p>
       </div>
      <ToDo todo={todo}></ToDo>
        
    </div>
    </div>)
}