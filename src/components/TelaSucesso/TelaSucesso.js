import { Link, useLocation } from "react-router-dom";

import "./style.css";

export default function TelaSucesso () {

    const { state } = useLocation();

    return (
        <>
            <div className="containerTelaSucesso">
                <h5>Pedido feito com sucesso!</h5>
                <div className="sucesso">
                    <p>Filme e sessão</p>
                    <span> {state.bookingInfo.title} </span>
                    <span>{state.bookingInfo.day} {state.bookingInfo.hour}</span>
                    <p>Ingressos</p>
                        {state.bookingInfo.seats.map((seat, index) => {
                            return (
                                <span key={index}>Assento {seat}</span>
                            );
                        })}
                    <p>Comprador</p>
                    <span>Nome: {state.bookingInfo.costumer}</span>
                    <span>CPF: {state.bookingInfo.costumerCpf}</span>
                </div>
                <Link to="/">
                    <button className="voltaHome">Voltar para Home</button>
                </Link>
            </div>
        </>
    )
}