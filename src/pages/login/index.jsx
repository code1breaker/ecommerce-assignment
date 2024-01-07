import React, { useState } from "react";
import fetchData from "../../utils/fetchData";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: false, password: false });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

    const handleLogin = () => {
    if(!input.username) setError((prev) => ({...prev, username:true}))
    if(!input.password) setError((prev) => ({...prev, password:true}))

    if(!input.username || !input.password) return

    const data = {
      username: input.username,
      password: input.password,
    };
    
    fetchData("/auth/login", "POST", data).then(result=>{
      if(result.token){
        localStorage.setItem("auth", result.token);
        navigate("/")
      }
      else {
        alert(result.message)
      }
      setInput({username:"",password:""})
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-md p-5 w-[18rem] flex flex-col gap-5">
        <p className="text-xl">Login</p>
        <div>
          <input
            className="outline-none p-1 border-2 w-full"
            type="text"
            placeholder="Username"
            value={input.username}
            name="username"
            onChange={(e) => handleChange(e)}
            onFocus={() => setError({...error, username:false})}
          />
          {error.username && <p className="text-red-400 text-sm">Required Field</p>}
        </div>
        <div>
          <input
            className="outline-none p-1 border-2 w-full"
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={(e) => handleChange(e)}
            onFocus={() => setError({...error, password:false})}
          />
          {error.password && <p className="text-red-400 text-sm">Required Field</p>}
        </div>
        <button
          onClick={() => handleLogin()}
          className="bg-blue-500 text-white p-1 rounded-md"
        >
          Login
        </button>
        <button className="text-blue-500 hover:underline">
          <Link to={"/how-to-use"}>How To Use</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
