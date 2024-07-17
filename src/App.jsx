import { Routes, Route } from "react-router-dom"
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
