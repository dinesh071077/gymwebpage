import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-scroll'


function Navbar() {


    const[nav,setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50){
             setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
  return (

   
    <div>
      <nav className={nav ? "nav activ" : "nav"}>
        <Link to='main' className='logo'>
        <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'></input>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main'>HEADER</Link></li>
            <li><Link to='features'>FEATURES</Link></li>
            <li><Link to='presentaion'>OFFER</Link></li>
            <li><Link to='about'>ABOUT</Link></li>
            <li><Link to='contact'>CONTACT</Link></li>    
            <li><a href='Register'>REGISTER</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;