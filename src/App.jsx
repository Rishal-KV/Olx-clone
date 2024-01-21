import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'


import { AuthContext } from './Store/FireBaseContext';
import { onAuthStateChanged } from 'firebase/auth';
import PostDetails from './Store/PostContext';





/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { auth } from './Firebase/config';

function App() {
  const {setUser} = useContext(AuthContext)
 
 
 useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    setUser(user)
    // console.log(user);
    
  
  })
 },[])
  return (

    <div>
      <PostDetails>
        
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/addproduct' element={<Create/>}/>
          
        </Routes>
      </Router>
      </PostDetails>
    </div>
  );
}

export default App;
