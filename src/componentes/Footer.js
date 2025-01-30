import "./Footer.css"
import Instagram from "../svgs/Instagram"
import Youtube from "../svgs/Youtube"
export default function Footer() {
    return(
        <>
            <div className="footer__container">

                <hr class="separador"></hr>
                <div className="footer__svg-container">
                    <Instagram></Instagram>
                    <Youtube></Youtube>
                </div>
            </div>
        </>
    )
}