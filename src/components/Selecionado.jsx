import { useState } from "react"
import style from "../styles/Formato.module.css"

export default function Selecionado(props) {
    const [selecionado, setSelecionado] = useState(0)

    const botaoClick = (seletor) => {
        setSelecionado(seletor)
        props.setSelecionado(seletor)
    }

    return (
        <div className="col-xl-10 mt-4">
            <div className="row">
                <div className="col-xxl-2 col-xl-3 col-md-12 text-white text-center mt-4">
                    Selecione o que quer descobrir
                </div>
                <div className="col-xl-9 col-md-12 col-xs-2">
                    <button className={
                        selecionado === 0 ? `${style["btSelectorActive"]} me-4 mt-4` : `${style["btSelector"]} me-4 mt-4`}
                        onClick={() => botaoClick(0)}>Gramatura</button>
                    <button className={
                        selecionado === 1 ? `${style["btSelectorActive"]} me-4 mt-4` : `${style["btSelector"]} me-4 mt-4`}
                        onClick={() => botaoClick(1)}>Quantidade</button>
                    <button className={
                        selecionado === 2 ? `${style["btSelectorActive"]} me-4 mt-4` : `${style["btSelector"]} me-4 mt-4`}
                        onClick={() => botaoClick(2)}>Peso</button>
                    <button className={
                        selecionado === 3 ? `${style["btSelectorActive"]} me-4 mt-4` : `${style["btSelector"]} me-4 mt-4`}
                        onClick={() => botaoClick(3)}>Comprimento</button>
                </div>
            </div>

        </div>
    )
}