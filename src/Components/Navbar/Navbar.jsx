import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",margin:"auto",justifyContent:"space-between",width:"100%"}}>
        <Link to={'/login'} style={{textDecoration:"none"}}>Login</Link>
        <Link to={'/signup'} style={{textDecoration:"none"}}>Sign Up</Link>
    </div>
  )
}

export default Navbar