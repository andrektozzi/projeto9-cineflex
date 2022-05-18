import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../../assets/styles/reset.css';
import '../App/style.css';

import Header from "../Header/Header";
import SelecionarFilme from "../SelecionarFilme/SelecionarFilme";
import SelecionarHorario from "../SelecionarHorario/SelecionarHorario";
import SelecionarSecao from "../SelecionarSecao/SelecionarSecao";

export default function App () {
    return (
    <BrowserRouter>
        <Header />
         <Routes>
          <Route path="/" element={<SelecionarFilme />} />
          <Route path="/filme/id" element={<SelecionarHorario />} />
          <Route path="/sessao/id" element={<SelecionarSecao />} />
        </Routes>
    </BrowserRouter>
    )    
}
