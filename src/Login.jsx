import React from 'react'
import './Login.css'
import  { useState } from 'react'
import { FaRegUser ,FaLock } from "react-icons/fa";

function Login() {
    const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[emailerror,setemailError] = useState('')
//   const[passworderror,setpasswordError] = useState('')
  const getStorage = localStorage.getItem('username')
  const getPassword = localStorage.getItem('password') 

  const handleLogin = (e) => {
    e.preventDefault()

     if(email == getStorage && password ==getPassword){
        alert('Login successfully')
        window.location.href = '/'
     }
     else{ 
        alert('invalid username or password')
     }
   
     
     
    

    }
    
  return (
    <div className="body">

    
    <div className='background-con'>
         <div className="box-container">
            <form action="" onSubmit={handleLogin }>
                <h1 >LOGIN  </h1>
                <div className="input-box1">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Username' />
                    <FaRegUser className='icon' />
                    <p className='error'>{emailerror}</p>

                </div>
                <div className="input-box1">
                    <input type="text" value={password} onChange={(e)=> setPassword(e.target.value) } placeholder='Password' />
                    <FaLock className='icon' />
                    {/* <p className='error'>{passworderror}</p> */}

                </div>
                
               <div className="Remember-con"> 
                <div className="check-boxcon">
                  <input  className='box1' type='checkbox'/>
                  <lable>Remember me</lable>
                </div>
                
                 <a href='/Forgot' className='forgot'> Forgot Password?</a>
               </div>
                 <button className='button1' type='submit'>Login</button>

                 <div className="Register-box">
                    <p>Don't have an account? <a href='/Register'>Register</a></p>
                 </div>
            </form>
         </div>
         
    </div>
    </div>
  )
}

export default Login