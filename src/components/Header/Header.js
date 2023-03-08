import './Header.css'
import logo from '../img/logo.png'

const Header = () => {

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="header">
      <a href="#">
        <img className="logo-img" src={logo} alt="logo" onClick={refreshPage} />
      </a>
    </div>
  )
}

export default Header;