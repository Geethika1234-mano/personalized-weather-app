import React,{useState} from 'react'
import Weather from '../components/Weather'
import { Link } from 'react-router-dom'
import './loginform.css'
import { FacebookLoginButton } from 'react-social-login-buttons'

export const Loginform = () => {
  const [uname,setUname] = useState('');
  const [pssword,setPassword] = useState('');



 function validation(){
    if(uname === "admin" && pssword==="admin123"){
      console.log("done");
      <Link to="/Weather">link</Link>
    }
 }
  return (
    <>
    <div className='page'>
      <div className='cover'>
          <h1>Login</h1>
          <input type="text" placeholder='username'  name="uname" value={uname}
          onChange={(e) => setUname(e.target.value)} />
          <input type="password" placeholder='password'  name="pssword" value={pssword}
          onChange={(e)=>{setPassword(e.target.value)}}/>
    {(uname === "admin" && pssword==="admin123")?<Link to="/Weather"><button >Login</button></Link>:<Link to="/"><button >Login</button></Link>
    }
          

           <p className='text'>Or Login using</p>

      <div className='alt-login'>
        <div className="facebook" onClick={()=>{window.open("https://www.facebook.com")}}></div>
        <div className="google" onClick={()=>{window.open("https://www.google.com")}}></div>
      </div>
      
      </div>
      </div>
      </>
  );
}
