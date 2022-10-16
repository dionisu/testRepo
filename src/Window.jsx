
    import  './style.css';
    import Logo from './images/Logo.svg'
export default function Window({handleClick}){
        return(<div className='Panel'>
            <img className='image1' src={Logo}></img>
                
            <p className='p1'>Make successful your day </p>
           <p className='p1-1'>Make small somethings to get big gift in your life</p>
            <button className='b1' onClick={handleClick}>Start</button>
        </div>)
}