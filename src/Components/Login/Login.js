import React, {  useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Firebase/config'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [err,setErr] = useState(null)
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState(' ')
  const navigate = useNavigate()
  function handleLogin (e){
    e.preventDefault();
    
    if(email && !emailPattern.test(email)){
      setErr('Invalid email format')
      return
    }else if(password && password.length < 4){
      setErr('Password must be at least 4 character')
      return
    }
  signInWithEmailAndPassword(auth,email,password).then(() => {
    navigate('/')

  }).catch((err)=>{
    setErr("user not found")
  })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
          
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={() => navigate('/signup')}>Signup</a>
        { err ? <span style={{color:'red'}}>{err}</span> : ''}
      </div>
    </div>
  );
}

export default Login;
