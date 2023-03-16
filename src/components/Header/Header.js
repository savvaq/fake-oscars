import './Header.css'
import logo from '../img/logo.png'
import { useNavigate } from "react-router-dom"

const Header = () => {

  return (
    <div className="header">
      <a href="#">
        <img className="logo-img" src={logo} alt="logo" onClick={useNavigate('/root')} />
      </a>
    </div>
  )
}

export default Header;