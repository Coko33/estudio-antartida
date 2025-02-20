import { useState } from "react";
import "./NuestrosTrabajos.css"
export default function TrabajoCard ({img, titulo, subtitulo, texto, link}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHeight = () => {
        setIsOpen(!isOpen); 
    };
    return (
        <>
            <div className="trabajoCard__container">
                <div className="trabajoCard__imgContainer">
                    <img alt="imagen proyecto" src={img}></img>
                    <button className="trabajoCard__button" onClick={toggleHeight}>Ver más</button>
                </div>
                <div className="trabajoCard__tituloContainer">
                    <h4>{titulo}</h4>
                    <p>{subtitulo}</p>
                </div>
                <div className={`trabajoCard__textContainer ${isOpen ? 'open' : ''}`}>
                    {texto}
                </div>
            </div>
        </>
    )
}