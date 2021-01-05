import "./Header.css";
import reactLogo from "../../images/React.png";

const Header = () => {

    
    return(

        <header>
            <nav className="nav">
                <img src={reactLogo} alt=""/>
                <span>Ejercicio 01 </span>
            </nav>
        </header>

    )

}

export default Header;