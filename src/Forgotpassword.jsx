import React from 'react'
import  { useState } from 'react'
import './Forgotpassword.css'
import { FaRegUser ,FaLock } from "react-icons/fa";

function Forgotpassword() {
  
         const[email,setEmail] = useState('')
         const[newpassword,setNewpassword] = useState('')
          const[conformpassword,setConform] = useState('')
          const getEmail = localStorage.getItem('email')

          const[emailerror,setemailError] = useState('')
          const[passworderror,setpasswordError] = useState('')
          const[conformerror,seteconformError] = useState('')

          const  handleForgot =(e) =>  {
            e.preventDefault();
             let   hasError = false
            if( email == ''){
                setemailError('Please enter a email  ');
            }
            else if(email !== getEmail  ){
                setemailError('Invaild email');
               
            }
            else{
                hasError =true
            }

            if(newpassword == ''){
                setpasswordError('Please enter a new password');
            } 
             else if(newpassword.length <= 6){
                setpasswordError('Password must be 6 characters');
            }
            else{
                hasError = true
            }
            if(conformpassword == ''){
                seteconformError('Please enter a conform password');
            }

            else if(conformpassword !== newpassword){
                seteconformError('invaid confom password');
            }
            else{
                hasError = true
                alert('Password changed successfully');
                window.location.href = '/Login'
            }

          
          }

  return (
    <div className="body">
        <div className='background-con3'>
             <div className="box-container3">
                <form action=""  onSubmit={handleForgot }>
                    <h1 >LOGIN 1WIN </h1>
                    <div className="input-box3">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
                        <FaRegUser className='user1' />
                        <p className='error2'>{emailerror}</p>
    
                    </div>
                    <div className="input-box3">
                        <input type="text" value={newpassword} onChange={(e)=> setNewpassword(e.target.value) } placeholder='New password' />
                        <FaLock className='user1' />
                        <p className='error2'>{passworderror}</p>
    
                    </div>
                    <div className="input-box3">
                        <input type="text" value={conformpassword} onChange={(e)=> setConform(e.target.value) } placeholder='Conform password' />
                        <FaLock className='user' />
                        <p className='error2'>{conformerror}</p>
    
                    </div>
                     
                     <button type='submit'>Reset</button>
    
                     <div className="Register2">
                        <p>Login your account? <a href='/Login'>Login</a></p>
                     </div>
                </form>
             </div>
             
        </div>
        </div>
  )
}

export default Forgotpassword