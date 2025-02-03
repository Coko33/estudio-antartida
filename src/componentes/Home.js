import "./Home.css"
import carpinchImg from "../assets/carpinch.png"
import { AnimatedText } from "./AnimatedText"
export default function Home() {
    return(
        <>
            <div className="Home1__container">
                <div className="Home1__img-container">
                    <img className="Home1__img" alt="carpincho" src={carpinchImg}></img>
                </div>
                <div className="Home1__text-container">
                    <AnimatedText word="VIDEOJUEGO"></AnimatedText>
                    <AnimatedText word="EXPERIENCIAS LÚDICAS"></AnimatedText>
                    <AnimatedText word="ANTARTIDAASD"></AnimatedText>
                    <AnimatedText word="ASOI VIDEOKEUGOS"></AnimatedText>
                    <AnimatedText word="ANSOC SOSC SOSK AS"></AnimatedText>
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