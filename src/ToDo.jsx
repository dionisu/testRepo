import  './style.css';

export function ToDo({description, date, finished}) {

    return (
        <div className="DateTask">
            <div className="square" />
            <p className='date'>{date}</p>
            <p className='task'>{description}</p>
        </div>
        )
}