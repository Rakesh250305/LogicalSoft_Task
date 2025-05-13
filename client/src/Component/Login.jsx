// import React from 'react'
import { useState } from "react";
import '../App.css'
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function LoginHandler(e){
    e.preventDefault();
    axios.post('http://127.0.0.1:3001/login',{email,password})
      .then(result => {console.log(result)
        if(result.data === "success"){
          navigate('/');
          console.log("Login Successfull");

        }else if(result.data === "Invalid Password"){
          alert("Invalid Password");
        }else{
          alert("User not found");
        }
      });
        // .catch(err => console.log(err)); 
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <div className="justify-center items-center h-screen w-screen flex bg-emerald-400">
          <div className="flex h-[50%] w-[30%] bg-white border-2 p-4 rounded-3xl">
              <form onSubmit={(e)=>{LoginHandler(e)}} className='flex flex-col items-center w-full text-black'>
                <h2 className='m-2'>Login</h2>
                
                <div className='w-[80%] items-center justify-between flex my-2'>
                  <label className='w-[20%]' htmlFor="">Email</label>
                  <input className="w-[75%] text-xl outline-none bg-transparent border-2 border-emerald-600 py-2 px-5 rounded-full placeholder:text-gray-400" 
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                    type="email" placeholder="Enter your email" required/>

                </div>
                <div className='w-[80%] items-center justify-between flex my-2'>
                  <label className='w-[20%]' htmlFor="">Password</label>
                  <input className="w-[75%] text-xl outline-none bg-transparent border-2 border-emerald-600 py-2 px-5 rounded-full placeholder:text-gray-400" 
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                    type="password" placeholder="Enter Password" required/>

                </div>
                <button className="text-xl w-[80%] text-white border-2 bg-emerald-600 py-2 px-5 rounded mt-2 hover:bg-emerald-800">LogIn</button>
                <p className='mt-2'>Doesn't have an account? <Link to={'/signup'} className='font-bold'>Register</Link></p>
              </form>
          </div>
      </div>
      
    </div>
  )
}

export default Login
