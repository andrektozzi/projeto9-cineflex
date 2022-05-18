import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

function Imagem ({source, id, index}) {
    return (
        <Link to={`/filme/${id}`}>
            <img src={source} key={index} alt="imagemFilme" />
        </Link>
    )
}

export default function SelecionarFilme () {

    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        promise.then(resposta => {
            setImagens(resposta.data);
        });
    }, []);

    return (
        <>
            <div className="containerSelecionarFilme">
                <h5>Selecione o filme</h5>
                <div className="containerOpcoesFilme">
                    {imagens.length === 0 ? 'Carregando' :
                    imagens.map((image, index) => <Imagem source={image.posterURL} key={index} id={image.id}/>)
                    }
                </div>
            </div>
        </>
    )
}
