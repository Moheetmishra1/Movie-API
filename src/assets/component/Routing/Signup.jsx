import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){

    let [signup,setsignup] = useState({name:"",email:"",password:""})
    let navigateToLogin = useNavigate()

    let updateSignup = ({target:{name,value}})=>{
        setsignup({...signup,[name]:value})
     
    }

    let sendFormData = (e)=>{
        e.preventDefault();
        console.log(signup);
        navigateToLogin("/login")
    }

    return (
        <>
        <h1>fnefeh</h1>
        <form onSubmit={sendFormData}>
            <input type="text" onChange={updateSignup} name="name" value={signup.name} placeholder="FullName"/>

            <input type="text" onChange={updateSignup} name="email" value={signup.email} placeholder="Email"/>

            <input type="password" onChange={updateSignup} name="password" value={signup.password} placeholder="Password"/>

            <button type="submit">Register</button>


        </form>
        </>
    )



}