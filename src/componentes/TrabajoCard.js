import "./NuestrosTrabajos.css"
export default function TrabajoCard ({img, titulo, subtitulo, texto, link}) {
    return (
        <>
            <div className="trabajoCard__container">
                <div className="trabajoCard__imgContainer">
                    <img alt="imagen proyecto" src={{img}}></img>
                    <button className="trabajoCard__button">Ver más</button>
                </div>
                <div className="trabajoCard__textContainer"></div>
            </div>
        </>
    )
}