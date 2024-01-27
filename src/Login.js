import React, { useState } from 'react';
import Axios from 'axios';
import logo from './Main Logo.svg'
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
    const [username, setUser] = useState("");
    const [password, setPwd] = useState("");
    const [loginCredential, setLoginCreds] = useState("");
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
            if(response.data.message){
                setLoginCreds(response.data.message);
            } else {
                setLoginCreds(response.data[0].username);
            }
        });
    }
    return(
        <div className="wrapper h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center h-96 w-96 bg-white shadow-lg rounded-2xl p-8 font-primary">
                <img className="mx-auto h-auto w-72 mb-8" src={logo} alt=""></img>
                    <input
                        className="w-full input"  
                        type="text"
                        id="username"
                        placeholder="Username"
                        onChange = {(e) => {
                            setUser(e.target.value);
                        }}
                    />
                    <FaUser className='ml-auto -translate-y-8 -translate-x-4 text-secondary opacity-50'></FaUser>
                    <input
                        className='w-full input'
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange = {(e) => {
                            setPwd(e.target.value);
                        }}
                    />
                    <FaLock className='ml-auto -translate-y-8 -translate-x-4 text-secondary opacity-50'></FaLock>
                    <a className="text-primary hover:text-secondary duration-200 ease-in-out" href="/">Forgot Password?</a>
                    <button className="mt-auto w-full btn" onClick={login}>LOGIN</button>
            </div>
        </div>
    )
}
export default Login;