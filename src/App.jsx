import { Routes, Route } from "react-router-dom"
/*
  Developed By: Gaurav Lokhande
  Email: gaurravlokhande@gmail.com
  Linkedin: https://www.linkedin.com/in/gauravlokhande
  Github: https://github.com/gauravxlokhande
  Trailhead: https://www.salesforce.com/trailblazer/gauravlokhande
  Instagram: gauravxlokhande
   */



import { UserContextProvider } from "./Context/UserCredentials";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Meet from "./Components/Meet"

function App() {

  return (
    <>

      <UserContextProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Meet/:MeetId" element={<Meet />} />
        </Routes>
      </UserContextProvider>

    </>
  )
}

export default App
