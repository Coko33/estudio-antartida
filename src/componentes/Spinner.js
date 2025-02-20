import Logo2 from "./../svgs/Logo2"
import { AnimatedText } from "./AnimatedText"
import "./Spinner.css"
export default function Spinner() {
    return (
        <>
            <div className="Spinner__container">
                <div className="Spinner__svgContainer">
                    <Logo2></Logo2>
                </div>
                <h2><AnimatedText word="Estudio Antártida"></AnimatedText></h2>
            </div>
        </>
    )
}