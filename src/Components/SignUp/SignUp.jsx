import React, { useState } from 'react';
import './signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [role,setrole]=useState("")
    const nav=useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`https://lovely-ox-twill.cyclic.app/users/signup`,
    {username:name,
    email:email,
    password:pass,
    role:role})
    .then((res)=>{
        nav('/login')
    })
    .catch((err)=>{
      console.log(err)
    })
   }
  return (
    <form onSubmit={handleSubmit} style={{textAlign:"start"}}>
     <label for="username">Username: </label>
     <input type='text' name='username' placeholder='Enter username' value={name} onChange={(e)=>{setname(e.target.value)}} /><br></br>
     <label for="email">Email: </label>
     <input type='email' name='email' placeholder='Enter your email' value={email} onChange={(e)=>{setemail(e.target.value)}} /><br></br>
     <label for="password">Password: </label>
     <input type='password' name='password' placeholder='Enter password'  value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br></br>
     <label for="role">Role: </label>
     <select name='role' placeholder='Select option' value={role} onChange={(e)=>{setrole(e.target.value)}}>
    <option disabled>Select Role</option>
    <option value='CREATOR'>CREATOR</option>
    <option value='VIEWALL'>VIEWALL</option>
    </select><br></br>
    <input type="submit" value="Sign Up"/>
    </form>

  )
}

export default SignUp