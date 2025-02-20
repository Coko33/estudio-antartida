import "./Home.css"
import { useState, useEffect } from "react";
import carpinchImg from "../assets/carpinch.png"
//import tunelImg from "../assets/tunel.png"

import { AnimatedText } from "./AnimatedText"
import Spinner from "./Spinner"
export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const images = [
          carpinchImg,
          //tunelImg
        ];
    
        const startTime = Date.now();
        
        const loadImages = images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        });
    
        Promise.all(loadImages).then(() => {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(3000 - elapsedTime, 0); // Asegura al menos 3
          setTimeout(() => setLoading(false), remainingTime);
        });
    
      }, []);
    return(
        <>
            {loading? (<Spinner></Spinner>) : (
                <div className="Home1__container">
                <div className="Home1__img-container">
                    <img className="Home1__img" alt="carpincho" src={carpinchImg}></img>
                </div>
                <div className="Home1__text-container">
                    <AnimatedText word="VIDEOJUEGOS"></AnimatedText>
                    <AnimatedText word="PLATAFORMAS DIGITALES"></AnimatedText>
                    <AnimatedText word="EDUCACIÓN"></AnimatedText>
                    <AnimatedText word="CULTURA"></AnimatedText>
                    <AnimatedText word="DIVULGACIÓN"></AnimatedText>
                </div>
                <div className="Home1__text2-container">
                    <h4>Qué hacemos</h4>
                    <br></br>
                    <p>Somos un estudio dedicado al desarrollo de videojuegos y plataformas digitales interactivas con sede en Buenos Aires. Nos especializamos en la integración de recursos pedagógicos y en la creación de experiencias digitales que potencien el aprendizaje a través del juego.</p>
                    <br></br>
                    <p>Creemos que la música es un puente natural entre el entretenimiento, la cultura y la educación. Por eso, en cada proyecto desarrollamos composiciones originales que se entrelazan de manera orgánica con la narrativa y la jugabilidad, enriqueciendo la experiencia interactiva.</p>
                    <br></br>
                    <p>Nuestro objetivo es fusionar arte, tecnología y conocimiento para generar propuestas innovadoras que inspiren y eduquen.</p>
                </div>
            </div>
            ) } 
        </>
    )
}