import "./NuestrosTrabajos.css";
import mesh1 from "../assets/mesh1.png";
import TrabajoCard from "./TrabajoCard";

export default function NuestrosTrabajos() {
    return(
        <>
            <TrabajoCard img={{mesh1}} titulo={"titulo"} subtitulo={"subtitulo"} texto={"texto"} link="link"></TrabajoCard>
        </>
    )
}