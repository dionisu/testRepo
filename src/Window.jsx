
    import  './style.css';
    import Logo from './images/Logo.svg'
    import { Link } from 'react-router-dom';

export default function Window(){
    return (
        <>
            <div className='Panel'>
                <img className='image1' src={Logo} alt=""/> 
                <p className='p1'>Make successful your day </p>
                <p className='p1-1'>Make small somethings to get big gift in your life</p>
                <Link to="/AddTask">
                    <button className='b1'>Start</button>
                </Link>
            </div>
        </>
    )
}