import Users from "../src/components/Users"
import Addusers from "../src/components/Addusers"
import Updausers from "../src/components/Updateusers"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users/>}></Route>
      <Route path="/Addusers" element={<Addusers/>}></Route>
      <Route path="/UpdateUsers/:id" element={<Updausers/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
