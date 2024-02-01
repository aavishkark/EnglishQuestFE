import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Creator from './Creator/Creator'
import ViewAll from './ViewALL/ViewAll'
import Home from './Home/Home'

const AllRoutes = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signUp' element={<SignUp/>}></Route>
            <Route path='/creator' element={<Creator/>}></Route>
            <Route path='/viewall' element={<ViewAll/>}></Route>
        </Routes>
  )
}

export default AllRoutes