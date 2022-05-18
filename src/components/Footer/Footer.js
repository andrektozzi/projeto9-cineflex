import "./style.css";
import filme from "../../assets/images/filme.png";

export default function Footer() {
    return (
        <>
            <div className="containerFooter">
                <img src={filme} alt="imagemFilme" />
                <div>
                <p>Enola Holmes</p>
                <p>Quinta-Feira - 15:00</p>
                </div>
            </div>
        </>
    )
}