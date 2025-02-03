import "./Footer.css"
import Instagram from "../svgs/Instagram"
import Youtube from "../svgs/Youtube"
export default function Footer() {
    return(
        <>
            <div className="footer__container">
                <div className="footer__text-container">
                    <h6>Estudio Antártida</h6>
                    <p>info.estudioantartida@gmail.com</p>
                </div>
                <hr class="separador"></hr>
                <div className="footer__svg-container">
                    <div className="footer__svgs">
                        <Instagram></Instagram>
                        <Youtube></Youtube>
                    </div>
                </div>
            </div>
        </>
    )
}