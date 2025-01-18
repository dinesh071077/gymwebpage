import React from 'react'
import { FaRegUser ,FaLock } from "react-icons/fa";


import { MdOutlineEmail } from "react-icons/md";

import  { useState } from 'react'
import './Register.css'



function Register() {
    const[user,setUser] = useState('')
     const[email,setEmail] = useState('')
      const[password,setPassword] = useState('')
      const[usererror,setuserError] = useState('')
      const[emailerror,setemailError] = useState('')
      const[passworderror,setpasswordError] = useState('')




      const handleRegister = (e) => {
        e.preventDefault()
        let hasError = false


        if(user === ''){
            setuserError('Please enter a username')
        }
        else{

            localStorage.setItem('username',user)
            hasError = true
        }

        if(email === ''){
            setemailError('Please enter a email')

        }
        
        else { 
            localStorage.setItem('email',email)
            hasError = true
        }

        if(password === ''){
            setpasswordError('Please enter a password')
        }
        else if(password.length <=  6){
            setpasswordError('Password must be 6 characters')
        }
        else{
            localStorage.setItem('password',password)
            hasError = true
            alert('Register successfully.Please vist our office soon as possible ') 
            window.location.href = '/'
        }
      }
 
  return (
    <div className='body'>
     <div className='background-con2 '>
             <div className="box-container2">
                <form action=""   onSubmit={handleRegister} >
                    <h1 >REGISTER GYM MEMBER </h1>
                    <div className="input-box2">
                        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='Username'  />
                        < FaRegUser className='user' />
                        <p className='error1'>{usererror}</p>
    
                    </div>
                    <div className="input-box2">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <MdOutlineEmail className='user' />
                        <p className='error1'>{emailerror}</p>
    
                    </div>
                    <div className="input-box2">
                        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value) } placeholder='Password' />
                        <FaLock  className='user' />
                        <p className='error1'>{passworderror}</p>
    
                    </div>
                     <div className="Remem">
                     <input className='check' type="checkbox" /> 
                        <lable className='term'>Terms&condition</lable>
                        
                     </div>
                    
                     <button type='submit'>Register</button>
    
                     <div className="Register1">
                        <p>Already have an account? <a href='/Login'>Login</a></p>
                     </div>
                </form>
             </div>
             
        </div>
        </div>
  )
}

export default Register