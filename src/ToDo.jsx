import  './style.css';

export default function ToDo({todo}){
    console.log(todo)
    
    return(<div className='ToDo'>
    <div className="toDoSquare">

    </div>
    <p className="toDoDate">
        9 Sep 2022
    </p>
        
        {todo.map((item,index)=><p className="toDoTask" key={`${item}_${index}`}>{item}</p>)}
        
    </div>)
}