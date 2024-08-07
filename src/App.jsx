import RegisterPage from "../src/pages/RegisterPage/RegisterPage.jsx"
import Dashboard from "../src/pages/Dashboard/Dashboard.jsx"
import Login from "../src/pages/Login/Login.jsx"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path ="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
