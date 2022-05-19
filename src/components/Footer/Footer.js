import "./style.css";


export default function Footer({imagemFilme, tituloFilme, dataFilme, weekdayFilme}) {
    return (
        <>
            <div className="containerFooter">
                <img src={imagemFilme} alt="imagemFilme" />
                <div>
                <p>{tituloFilme}</p>
                {weekdayFilme ? <p>{weekdayFilme} - {dataFilme}</p> : null}
                </div>
            </div>
        </>
    )
}