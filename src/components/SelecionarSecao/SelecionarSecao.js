import { Link } from "react-router-dom";

import "./style.css";
import Footer from "../Footer/Footer";


function Label (props) {
    return (
        <div className="label">
            <button key={props.index} className={props.class}></button>
            <span>{props.text}</span>
        </div>
    )
}

export default function SelecionarSecao () {

    const labels = [
        {
            class: "selected",
            text: "Selecionado"
        },
        {
            class: "available",
            text: "Disponível"
        },
        {
            class: "unavailable",
            text: "Indisponível"
        },
    ]

    const botaoLabel = labels.map ((item, index) => (
        <Label class={item.class} text={item.text} key={index} />
    ));

    let botoes = [];
    let i = 0;

    while (i < 50) {
        i++;
        botoes.push(i);
    }

    const botaoAssento = botoes.map (function (item, index){
        return (
            <button key={index}> {index + 1} </button>
        )
    })

    return (
        <>
            <h5>Selecione o(s) assento(s)</h5>
            <div className="containerSelecionarSecao">
                <div className="botaoAssento">
                    {botaoAssento}
                </div>
                <div className="botaoLabel">
                    {botaoLabel}
                </div>
                <div className="infoCliente">
                    <span>Nome do Comprador:</span>
                    <input type="text" placeholder="Digite seu nome..." />
                    <span>CPF do Comprador:</span>
                    <input type="text" placeholder="Digite seu CPF..." />
                </div>
                <Link to="/sucesso">
                    <button className="reservaAssento">Reservar Assento(s)</button>
                </Link>
            </div>
        <Footer />    
        </>
    )
}