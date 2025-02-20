import fotoGenerica from "../assets/mesh1.png"
import "./Nosotros.css"
export default function Nosotros () {
    return(
        <>
            <div className="Nosotros__container">
                <div className="Nosotros__personaContainer">
                    <div className="Nosotros__personaImgContainer">
                        <img className="Nosotros__personaImg" alt="" src={fotoGenerica}></img>
                    </div>
                    <h2>Nicolás Plácido</h2>
                    <br></br>
                    <p>Músico, programador, desarrollador y gestor cultural especializado en arte y tecnología. Licenciado en Música con orientación en Dirección Orquestal (UNA) con formación en desarrollo web y sistemas.</p>
                    <br></br>
                    <p>Con experiencia en programación C# en proyectos Unity, implementación de música interactiva con Wwise, diseño audiovisual, producción de sonido y trabajos en instituciones como la Manzana de las Luces y el Museo Malvinas, donde coordinó proyectos culturales, educativos y multimedia.</p>
                </div>
                <div className="Nosotros__personaContainer">
                    <div className="Nosotros__personaImgContainer">
                        <img className="Nosotros__personaImg" alt="" src={fotoGenerica}></img>
                    </div>
                    <h2>Maite Larumbe</h2>
                    <br></br>
                    <p>Ilustradora, diseñadora, productora y gestora cultural con experiencia en el montaje de actividades y eventos culturales dedicados a infancias y público en general. </p>
                    <br></br>
                    <p>En el ámbito académico se graduó del Profesorado en Artes Plásticas con orientación en Muralismo y Arte Público Monumental en la Universidad Nacional de La Plata, donde también se desempeñó como docente. Formó parte del equipo de coordinación de talleres de arte público en ex centros clandestinos de detención, museos a cielo abierto y escuelas técnicas. Además se especializa en accesibilidad web, género y museología.</p>
                </div>
                <div className="Nosotros__personaContainer">
                    <div className="Nosotros__personaImgContainer">
                        <img className="Nosotros__personaImg" alt="" src={fotoGenerica}></img>
                    </div>
                    <h2>Santiago Gómez</h2>
                    <br></br>
                    <p>Músico, docente, productor y game designer especializado en la inclusión de nuevas tecnologías en la educación. Licenciado en Actuación (UNA) y Maestro Especial de Música (UNLP) con experiencia en el desarrollo de videojuegos y plataformas digitales interactivas. 
                    </p>
                    <br></br>
                    <p>En el ámbito de la divulgación ofreció conferencias sobre la tecnología y los videojuegos en la educación tales como La Tecnología en la Música y el Arte Comunitario (Ecosistema Cultural), REPROGRAMANDO: Recursos y herramientas digitales para el aula (Eureka) y Los Unicornios de Troya: el videojuego como recurso educativo (EVA)</p>
                </div>
            </div>
        </>
    )
}