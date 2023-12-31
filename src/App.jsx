import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./Views/Home/Home"
import About from "./Views/About/About"
import Contact from "./Views/Contact/Contact"
import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"

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
        <Route
          path="/contact"
          element={<Contact />} />
      </Routes>
      <Footer />  
      </div>
  )
}

export default App
