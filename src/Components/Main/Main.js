import "./Main.css";
import portrait from "../../images/4x4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faReact} from "@fortawesome/free-brands-svg-icons";

const Main = () => {

    return(

        <main className="main">
            <div className="container">
                
                <div className="info">
                    <div className="image">
                        <div className="image-container">
                            <img src={portrait} alt=""/>
                        </div>
                    </div>
                    <div className="text">
                        <h2>Acerca de mi</h2>
                        <section>
                        Mi nombre es Mariano, tengo 27 años soy estudiante de ingeniería en telecomunicaciones en UNSAM, soy aficionado a la tecnología, para mi es más que una herramienta, es una pasión. 
                        Realizo este curso para poder cumplir un sueño, el cual consta en desarrollar soluciones tecnológicas que eviten el uso de papel y a su vez posicionen a pequeñas y medianas empresas en el mundo tecnológico.
                        </section>
                    </div>
                
                </div>

                <h2 className="stack">Stack Tecnológico</h2>

                <div className="skills">

                        <div className="skill">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faHtml5} className="iconBar html" /> 
                            </div>
                            <span className="number">95%</span>
                            <div className="bar">
                                <span className="complete progress1"></span>
                            </div>
                            
                        </div>

                        <div className="skill">

                            <div className="icon-container">
                                <FontAwesomeIcon icon={faCss3} className="iconBar css" />
                            </div> 
                            <span className="number">90%</span>
                            <div className="bar">
                                <span className="complete progress2"></span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="icon-container">
                            <FontAwesomeIcon icon={faJs} className="iconBar js" /> 
                            </div>
                            <span className="number">70%</span>
                            <div className="bar">
                                <span className="complete progress3"></span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faPhp} className="iconBar php" />
                            </div>
                            <span className="number">50%</span>
                            <div className="bar">
                                <span className="complete progress4"></span>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faReact} className="iconBar react" />
                            </div>
                            <span className="number">5%</span>
                            <div className="bar">
                                <span className="complete progress5"></span>
                            </div>
                        </div>
                        
                        
                        


                </div>
            </div>
            
         
        </main>
    );

}


export default Main;