import { Link } from "react-router-dom";

import "./style.css";

export default function SelecionarHorario () {
    return (
        <>
            <p>Selecione o horário</p>
            <div className="containerSelecionarHorario">
                <span>Quinta-feira - 24/06/2021</span>
                <div className="botaoHora">
                    <Link to="/sessao/id">
                        <button>15:00</button>
                    </Link>
                    <Link to="/sessao/id">
                        <button>18:00</button>
                    </Link>
                </div>
            </div>
            <div className="containerSelecionarHorario">
                <span>Quinta-feira - 24/06/2021</span>
                <div className="botaoHora">
                    <Link to="/sessao/id">
                        <button>15:00</button>
                    </Link>
                    <Link to="/sessao/id">
                        <button>18:00</button>
                    </Link>
                </div>
            </div>
        </>
    )
}