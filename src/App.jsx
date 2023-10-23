import Navbar from "./Components/Navbar/Navbar"
import Home from "./Views/Home/Home"
import HomePage from "./Views/Home/Home"
import About from "./Views/About/About"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
         path="/" 
         element={<HomePage />} /> 
        <Route 
         path="/about"
         element={<About />} />
      </Routes>    </div>
  )
}

export default App
