import "./Home1.css"
import carpinchImg from "../assets/carpinch.png"
export default function Home1() {
    return(
        <>
            <div className="Home1__container">
                <div className="Home1__img-container">
                    <img className="Home1__img" alt="carpincho" src={carpinchImg}></img>
                </div>
                <div className="Home1__text-container">
                    <h1>VIDEOJUEGO<br></br>
                    EXPERIENCIAS LÚDICAS<br></br> 
                    ANTARTIDAASD<br></br>
                    ASOI VIDEOKEUGOS<br></br>
                    ANSOC SOSC SOSK AS</h1>
                </div>
                <div className="Home1__text2-container">
                    <h4>Qué hacemos</h4>
                    <p>Diseñamos experiencias.. videojuegos .. bla Azul<br></br>
                    es una niña que deberá atravesar diversos<br></br>
                    obstáculos para bla Azul es una niña que deberá<br></br>
                    atravesar diversos obstáculos para bla.</p>
                </div>
            </div>
        </>
    )
}