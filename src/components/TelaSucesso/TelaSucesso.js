import { Link } from "react-router-dom";

import "./style.css";

export default function TelaSucesso () {
    return (
        <>
            <div className="containerTelaSucesso">
                <h5>Pedido feito com sucesso!</h5>
                <div className="sucesso">
                    <p>Filme e sessão</p>
                    <span>Enola Holmes</span>
                    <span>24/06/2021 15:00</span>
                    <p>Ingressos</p>
                    <span>Assento 15</span>
                    <span>Assento 16</span>
                    <p>Comprador</p>
                    <span>Nome: João Silva</span>
                    <span>CPF: 123.456.789-10</span>
                </div>
                <Link to="/">
                    <button className="voltaHome">Voltar para Home</button>
                </Link>
            </div>
        </>
    )
}