import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'

import "./style.css";
import Footer from "../Footer/Footer";


function Label({index, className, text}){
    return (
        <div className="label">
            <button key={index} className={className}></button>
            <span>{text}</span>
        </div>
    )
}

function Seats({index, id, isAvailable, name, seatId, setSeatId, seatName, setSeatName}){
    const [buttonClassName, setButtonClassName] = useState(`${isAvailable ? "available" : "unavailable"}`);

    return (
        <button key={index} 
                className={buttonClassName} 
                id={id} 
                name={name} 
                onClick={()=> {
                    SelectSeats(buttonClassName, setButtonClassName)
                    SaveInfoSeats(buttonClassName, seatId, setSeatId, id, seatName, setSeatName, name)                   
                }} 
            > {name} 
        </button>
    )
}

function SelectSeats(buttonClassName, setButtonClassName){

    if (buttonClassName === "available"){
        setButtonClassName("selected");
    } 
    if (buttonClassName === "selected"){
        setButtonClassName("available");
    }
}
function SaveInfoSeats(buttonClassName, seatId, setSeatId, id, seatName, setSeatName, name){
    if(buttonClassName === "available"){
        setSeatId([...seatId, id]);
        setSeatName([...seatName, name]);
    } else{
       let seatIdRemoved = [...seatId].filter(seat => !(seat === id));
       setSeatId(seatIdRemoved);
       let seatNameRemoved = [...seatName].filter(seat => !(seat === name));
       setSeatName(seatNameRemoved)
    }
}

export default function SelectSession(){
    
    let navigate = useNavigate();

    const [movieTitle, setMovieTitle] = useState([]);  
    const [movieImg, setMovieImg] = useState([]);  
    const [movieWeekday, setMovieWeekday] = useState([]);  
    const [movieHour, setMovieHour] = useState([]);  
    const [movieSeats, setMovieSeats] = useState([]); 
    const [movieDay, setMovieDay] = useState([]);
    const [session, setSession] = useState([]);

    const  { id }  = useParams();

  
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
    
        promise.then((response) => {
          setSession([response.data]);
          setMovieSeats([...response.data.seats]);
          setMovieTitle(`${response.data.movie.title}`);
          setMovieImg(`${response.data.movie.posterURL}`);
          setMovieWeekday(`${response.data.day.weekday}`);
          setMovieDay(`${response.data.day.weekday}`);
          setMovieHour(`${response.data.name}`);
        })
      }, []);

  
    const labels = [
        {
            className: "selected",
            text: "Selecionado"
        },
        {
            className: "available",
            text: "Dispon??vel"
        },
        {
            className: "unavailable",
            text: "Indispon??vel"
        },
    ] 

    const buttonLabel =  labels.map((item, index) => (
        <Label className={item.className} text={item.text} key={index}/>
    ));

    
    const [seatId, setSeatId] = useState([]);
    const [seatName, setSeatName] = useState([]);

    const buttonSeat = movieSeats.map((seat, index) => (
        <Seats key={index} 
               id={seat.id} 
               name={seat.name} 
               isAvailable={seat.isAvailable}
               seatId={seatId}
               setSeatId={setSeatId}
               seatName={seatName}
               setSeatName={setSeatName}
               />
    ));
       
    
    const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");

    function Booking (event) {
		event.preventDefault(); 
        if(seatId.length > 0){
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
                ids: seatId,
                name: name,
                cpf: cpf
            });

            promise.then((response)=>{
               let bookingInfo = {
                   title: movieTitle,
                   day: movieWeekday,
                   hour: movieHour,
                   seats: seatName,
                   costumer: name,
                   costumerCpf: cpf
               };
               navigate("/sucesso", {state: {bookingInfo}});
            })
        } else {
            alert("Selecione pelo menos um assento!");
        }

    }
    
    return(
        <>
            <h5>Selecione o(s) assento(s)</h5>
            <div className="containerSelectSession">
                <div className="buttonsSeat"> 
                    {session.length === 0 ? 'Carregando' : buttonSeat}  
                </div>
                <div className="buttonLabel"> 
                    {buttonLabel}
                </div>
                <form onSubmit={Booking}>
                    <div className="infoCostumer">
                        <span>Nome do Comprador:</span>
                        <input type="text" 
                               value={name} 
                               required 
                               onChange={e => setName(e.target.value)}
                               placeholder="Digite seu nome..." 
                        /> 
                        <span>CPF do Comprador:</span>
                        <input type="text" 
                               value={cpf} 
                               required 
                               onChange={e => setCpf(e.target.value)}
                               placeholder="Digite seu CPF..."
                        /> 
                        <button type="submit" className="bookSeat">Reservar Assento(s)</button> 
                    </div> 
                </form>
            </div> 
            <Footer movieTitle={movieTitle} 
                    movieImg={movieImg} 
                    movieWeekday={movieWeekday} 
                    movieHour={movieHour}/>
        </>
    )
}