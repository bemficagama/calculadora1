import { useState, useEffect } from "react"
import style from "../styles/Formato.module.css"

export default function Formato(props) {
    const [selecionado, setSelecionado] = useState(0)

    const botaoClick = (seletor) => {
        setSelecionado(seletor)
        props.setFormato(seletor)
    }

    return (
        <div className="col-xl-10">
            <div className="row">
                <div className="col-xxl-2 col-xl-3 col-md-12 text-white text-center mt-10 mt-4">
                    Selecione o formato do produto
                </div>
                <div className="col-xl-9 col-md-12">
                    <button className={
                        selecionado === 0 ? `${style["btSelectorActive"]} me-4 mt-4`: `${style["btSelector"]} me-4 mt-4` }
                        onClick={() => botaoClick(0)}>Folhas</button>
                    <button className={
                        selecionado === 1 ? `${style["btSelectorActive"]} me-4 mt-4`: `${style["btSelector"]} me-4 mt-4` }
                        onClick={() => botaoClick(1)}>Rolos</button>
                </div>


            </div>
        </div>









    )
}