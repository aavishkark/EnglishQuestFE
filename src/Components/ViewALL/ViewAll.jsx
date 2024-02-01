import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ViewAll = () => {
    const [books,setbooks]=useState([])
    useEffect(()=>{
        axios.get(`https://frail-crab-capris.cyclic.app/books/allbooks`)
        .then((res)=>{
          setbooks(res.data.Books)
        })
        .catch((err)=>{
          console.log(err)
        })
        },[])
  return (
    <div> <div>
    <p>All Books</p>
 {books.length>0?books.map((e)=>{
    return <div style={{border:'3px solid black'}}>
        <img src={e.cover} alt={e.name} style={{width:"50%"}}/>
        <p>Name: {e.name}</p>
        <p>Author: {e.author}</p>
        <p>Category: {e.category}</p>
        <p>Price: {e.price}</p>
    </div>
 }):<div>No Books in Library</div>}
</div></div>
  )
}

export default ViewAll