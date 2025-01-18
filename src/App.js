import React from 'react'
import Projectgym from './Projectgym'

import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Forgotpassword from './Forgotpassword';
import Readmore from './Readmore';

function App() {
  return (
    <div className='App'>
       
        <div>
        <Router>
          <Routes>
            <Route path='/' element={<Projectgym/>}></Route>
            <Route path='/Register'  element={<Register/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Forgot' element={<Forgotpassword/>}></Route>
            <Route path='/Readmore' element={<Readmore/>}></Route>
          </Routes>
         </Router>
        </div>
    </div>
  )
}

export default App