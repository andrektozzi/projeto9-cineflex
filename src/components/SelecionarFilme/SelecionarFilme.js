import { Link } from "react-router-dom";

import "./style.css";
import imagemFilme from "../../assets/images/filme.png";

export default function SelecionarFilme () {
    return (
        <>
            <div className="containerSelecionarFilme">
                <p>Selecione o filme</p>
                <div className="containerOpcoesFilme">
                    <Link to="/filme/id">
                        <img src={imagemFilme} alt="imagemFilme" />
                    </Link>
                    <img src={imagemFilme} alt="imagemFilme" />
                    <img src={imagemFilme} alt="imagemFilme" />
                    <img src={imagemFilme} alt="imagemFilme" />
                </div>
            </div>
        </>
    )
}
