import './Navbar.css'
import banner from '../../assets/banner.jpg'
import logo from '../../assets/logo_final2.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className='bannersup'>
        <img src={logo} alt="" />
        </div>
        <div className='navbar'>
                <div className='containerLinks' >
                    <Link className='link' to="/">INICIO</Link>
                    <Link className='link' to="/about">SOBRE NOSOTROS</Link>
                    <Link className='link' to="/contact">CONTÁCTENOS</Link>
                </div>
        </div>
    </nav>
  )
}

export default Navbar
