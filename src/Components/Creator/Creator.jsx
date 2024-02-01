import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Creator = () => {
  const [name,setname]=useState("")
  const [author,setauthor]=useState("")
  const [category,setcategory]=useState("")
  const [price,setprice]=useState("")
  const [cover,setcover]=useState("")
  const [books,setbooks]=useState([])
  const [openedit,setopenedit]=useState(false)
  const [singlebookid,setsinglebookid]=useState("")
  const [singlebookname,setsinglebookname]=useState("")
  const [singlebookauthor,setsinglebookauthor]=useState("")
  const [singlebookcategory,setsinglebookcategory]=useState("")
  const [singlebookprice,setsinglebookprice]=useState("")
  const [singlebookcover,setsinglebookcover]=useState("")
  const [singlecreatedat,setsinglecreatedat]=useState("")
  const [sort,setsort]=useState("asc")
  useEffect(()=>{
  axios.get(`https://lovely-ox-twill.cyclic.app/books/allbooks`)
  .then((res)=>{
    setbooks(res.data.Books)
  })
  .catch((err)=>{
    console.log(err)
  })
  },[])
    const handleAddBook=(e)=>{
        e.preventDefault()
         axios.post(`https://lovely-ox-twill.cyclic.app/books/addbook`,
         {name:name,
          author:author,
          category:category,
          price:price,
          cover:cover,
          createdAt:new Date()})
         .then((res)=>{
            console.log(res)
         })
         .catch((err)=>{
            console.log(err)
         })
    }
    
    const openEdit=(e)=>{
     setopenedit(true)
     setsinglebookname(e.name)
     setsinglebookauthor(e.author)
     setsinglebookcategory(e.category)
     setsinglebookprice(e.price)
     setsinglebookcover(e.cover)
     setsinglebookid(e._id)
     setsinglecreatedat(e.createdAt)
    }
    const handleUpdateBook=(e)=>{
        e.preventDefault()
        axios.patch(`https://lovely-ox-twill.cyclic.app/books/updatebook/${singlebookid}`,
        {
            name:singlebookname,
            author:singlebookauthor,
            category:singlebookcategory,
            price:singlebookprice,
            cover:singlebookcover,
            createdAt:singlecreatedat 
        })
        .then((res)=>{
            setopenedit(false)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const deleteBook=(e)=>{
        axios.delete(`https://lovely-ox-twill.cyclic.app/books/deletebook/${e._id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handlesort=(val)=>{
        axios.get("http://localhost:4500/books/sort",
        {sort:val})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
    <div>
        <p>Add Books to Library</p>
    <form onSubmit={handleAddBook} style={{textAlign:"start"}}>
    <label for="name">Name: </label>
    <input type='text' name='name' placeholder='Enter book name' value={name} onChange={(e)=>{setname(e.target.value)}} /><br></br>
    <label for="author">Author: </label>
    <input type='text' name='author' placeholder='Enter book author'  value={author} onChange={(e)=>{setauthor(e.target.value)}} /><br></br>
    <label for="category">Category: </label>
    <select name='category' placeholder='Select option' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
    <option disabled>Select Category</option>
    <option value='scifi'>Sci-fi</option>
    <option value='fantasy'>Fantasy</option>
    <option value='thriller'>Thriller</option>
    <option value='Horrer'>Horrer</option>
    <option value='history'>History</option>
    <option value='nonfiction'>Non-Fiction</option>
    </select><br></br>
    <label for="cover">Cover: </label>
     <input type='text' name='cover' placeholder='Enter book cover url'  value={cover} onChange={(e)=>{setcover(e.target.value)}} /><br></br>
    <label for="price">Price: </label>
    <input type='number' name='price' placeholder='Enter book price'  value={price} onChange={(e)=>{setprice(e.target.value)}} /><br></br>
   <input type="submit" value="Add"/>
   </form>
    </div>
    <div>
        <p>All Books</p>
        <div>
            <select onChange={(e)=>{setsort(e.target.value); handlesort(e.target.value)}}>
                <option selected disabled>Sort By Price</option>
                <option value={"desc"}>High to Low</option>
                <option value={"asc"}>Low to High</option>
            </select>
        </div>
     {books.length>0?books.map((e)=>{
        return <div style={{border:'3px solid black'}}>
            <img src={e.cover} alt={e.name} style={{width:"50%"}}/>
            <p>Name: {e.name}</p>
            <p>Author: {e.author}</p>
            <p>Category: {e.category}</p>
            <p>Price: {e.price}</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <button style={{padding:"10px",backgroundColor:"black",color:"white",borderRadius:"5px",border:"none"}} onClick={()=>{deleteBook(e)}}>Delete</button>
            <button style={{padding:"10px",backgroundColor:"black",color:"white",borderRadius:"5px",border:"none"}} onClick={()=>{openEdit(e)}}>Edit</button>
            </div>
        </div>
     }):<div>No Books in Library</div>}
    </div>
    {openedit?
     <div>
     <p>Edit Books</p>
     <form onSubmit={handleUpdateBook} style={{textAlign:"start"}}>
 <label for="name">Name: </label>
 <input type='text' name='name' placeholder='Enter book name' value={singlebookname} onChange={(e)=>{setsinglebookname(e.target.value)}} /><br></br>
 <label for="author">Author: </label>
 <input type='text' name='author' placeholder='Enter book author'  value={singlebookauthor} onChange={(e)=>{setsinglebookauthor(e.target.value)}} /><br></br>
 <label for="category">Category: </label>
 <select name='category' placeholder='Select option' value={singlebookcategory} onChange={(e)=>{setsinglebookcategory(e.target.value)}}>
 <option disabled>Select Category</option>
 <option value='scifi'>Sci-fi</option>
 <option value='fantasy'>Fantasy</option>
 <option value='thriller'>Thriller</option>
 <option value='Horrer'>Horrer</option>
 <option value='history'>History</option>
 <option value='nonfiction'>Non-Fiction</option>
 </select><br></br>
 <label for="cover">Cover: </label>
 <input type='text' name='cover' placeholder='Enter book cover url'  value={singlebookcover} onChange={(e)=>{setsinglebookcover(e.target.value)}} /><br></br>
 <label for="price">Price: </label>
 <input type='number' name='price' placeholder='Enter book price'  value={singlebookprice} onChange={(e)=>{setsinglebookprice(e.target.value)}} /><br></br>
<input type="submit" value="Update"/>
</form>
 </div>
    :""}
    </>
  )
}

export default Creator
