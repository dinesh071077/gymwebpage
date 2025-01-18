import React, { useState } from 'react'

function Contact() {
    // const [name,setName] = useState('')
    // const [nameerror,setNameerror] = useState('')

    // const handleValue = (e) => {
    //   e.preventDefault()
    //   if(name = ''){
    //     setNameerror('Please enter a NAME')
    //   }
    // }  
   
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form >
            <input type='text ' placeholder='Full Name'  required></input>
            
            <input type='email ' placeholder='Enter Your Email' required ></input>
            <textarea placeholder='Type here .....' name='message' ></textarea>
            <input type='submit' value='send'></input>

        </form>
    </div>
  )
}

export default Contact