import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./index.css"

const Index = () => {

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Age, setAge] = useState("")
  const navigate = useNavigate("")

  const Submitform = (event) => {
    event.preventDefault()



    axios.post("http://localhost:3001/Addusers", { Name, Email, Age })
      .then((result) => {
       
        navigate("/")
        setEmail("")
        setEmail("")
        setAge("")
       
      })
      .catch((err) => {
        console.error("Error:", err)
        alert("Failed to add user. Please try again.")
      })
  }

  return (
    <div className='bg-container'>
      <div className='card-container'>
        <h1>Add users</h1>
        <form onSubmit={Submitform} className='my-form'>
          <label>Enter Name</label>
          <input onChange={(e) => setName(e.target.value)} className="input-element" placeholder="Enter Name" type="text" />
          <label>Enter Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className="input-element" placeholder="Enter Email" type="email" />
          <label>Enter Age</label>
          <input onChange={(e) => setAge(e.target.value)} className="input-element" placeholder="Enter Age" type="number" />
          <button type="submit" className='adduser-button'>Add user</button>
        </form>
      </div>
    </div>
  )
}

export default Index
