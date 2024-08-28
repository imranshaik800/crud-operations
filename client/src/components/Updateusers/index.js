import React , {useState,useEffect}from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import axios from "axios"
import "./index.css"

const Index = () => {
  const {id} = useParams()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [age,setAge] = useState("")
  const navigate = useNavigate()



  useEffect(()=>{
    axios.get('http://localhost:3001/UpdateUsers/'+id)
    .then((result)=>{
      setName(result.data.Name)
      setEmail(result.data.Email)
      setAge(result.data.Age)
    })
    .catch(err => console.log(err))
},[id])

const SubmitElement = (event) => {
  event.preventDefault()
  axios.put("http://localhost:3001/UpdateUsers/"+id,{Name:name,Email:email,Age:age})
  .then((result) => {
    console.log(result)
    navigate("/")
  })
  .catch((err)=>{
    console.log(err)
  })


}


  return (
    <div className='bg-container'>
      <div className='card-container'>
      <h1>Add users</h1>
      <form onSubmit={SubmitElement} className='my-form'>
        <label>Enter Name</label>
        <input onChange={(e)=>setName(e.target.value)}   value={name} className="input-element" placeholder="Enter Name" type="text"/>
        <label>Enter Email</label>
        <input onChange={(e) => setEmail(e.target.value)}  value={email} className="input-element" placeholder="Enter Email" type="email"/>
        <label>Enter Password</label>
        <input onChange={(e) => setAge(e.target.value)}  value={age} className="input-element" placeholder="Enter age" type="number"/>
        <button className='adduser-button'>Update</button>
      </form>
     
      </div>
    </div>
  )
}

export default Index
