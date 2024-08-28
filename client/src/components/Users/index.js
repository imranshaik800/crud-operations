import React ,{useState,useEffect}from 'react'
import {Link} from "react-router-dom"

import axios from "axios"
import "./index.css"

const Index = () => {
    const [users,setUsers] = useState([])
   

    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then((result)=>setUsers(result.data))
        .catch(err => console.log(err))
    },[]) 


    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/Deleteuser/"+id)
        .then((result) => {
            window.location.reload()
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


   
  return (
    <div className='bg-container'>
        <h1 style={{color:"white"}}>CRUD OPERATIONS </h1>
        <div className='card'>
            <Link to="/Addusers"><button className='adduser-button'>Add User +</button></Link>
            <table className='table'>
                <tr > 
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                {users.map((each)=>{
                    return <tr className='tr'>
                        <td className='tr'>{each.Name}</td>
                        <td className='tr'>{each.Email}</td>
                        <td className='tr'>{each.Age}</td>
                        <Link to={`/UpdateUsers/${each._id}`}><td className='tr'><button style={{backgroundColor:"green",color:"white",padding:"10px",border:"none",borderRadius:"10px",cursor:"pointer"}}>Edit</button></td></Link>
                        <td className='tr'><button style={{backgroundColor:"red",color:"white",padding:"10px",border:"none",borderRadius:"10px",cursor:"pointer"}}onClick={(e) => handleDelete(each._id)}>Delete</button></td>
                    </tr>
                })}

            </table>

        </div>
    
    </div>
  )
}

export default Index
