import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () =>{

    return(

            <footer className="footer">
                <span className="owner">2021 Curso React - Mariano Pasquali</span>
                <span className="icons">
                    <a href="" className="icon github"><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a href="https://www.linkedin.com/in/mariano-yael-pasquali-678615178/" className="icon linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                </span>
                
            </footer>

    );  

}


export default Footer;