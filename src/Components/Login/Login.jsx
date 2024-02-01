import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const nav=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`https://lovely-ox-twill.cyclic.app/users/login`,
        {email:email,
        password:pass})
        .then((res)=>{
            if(res.data.user.role=="CREATOR"){
                nav('/creator')
            }
            else{
                nav('/viewall')
            }
        })
        .catch((err)=>{
          console.log(err)
        })
       }
  return (
    <form onSubmit={handleSubmit} style={{textAlign:"start"}}>
    <label for="email">Email: </label>
    <input type='email' name='email' placeholder='Enter your email' value={email} onChange={(e)=>{setemail(e.target.value)}} /><br></br>
    <label for="password">Password: </label>
    <input type='password' name='password' placeholder='Enter password'  value={pass} onChange={(e)=>{setpass(e.target.value)}} /><br></br>
   <input type="submit" value="Log In"/>
   </form>
  )
}

export default Login