import footer_img from "../img/GitHub_Logo_White.png"
import './Footer.css'

const Footer = () => {
	const refreshPage = () => {
		window.location.reload();
}
		return (
				<div className="footer">
            <a href="#">
								<img className="footer_img" src={footer_img} alt="logo" onClick={refreshPage} />
						</a>
				</div>
		)
}

export default Footer;