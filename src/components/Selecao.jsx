import { useState, useEffect } from "react"
import Gramatura from "./Gramatura"
import Quantidade from "./Quantidade"
import Peso from "./Peso"
import GramaturaRolo from "./GramaturaRolo"
import QuantidadeRolo from "./QuantidadeRolo"
import PesoRolo from "./PesoRolo"
import Comprimento from "./Comprimento"
import ComprimentoRolo from "./ComprimentoRolo"

import Formato from "../components/Formato"
import Selecionado from "../components/Selecionado"

import styles from "../styles/Selecao.module.css"


export default function Selecao() {
    const [selecionado, setSelecionado] = useState(0)
    const [formato, setFormato] = useState(0)

    function Corpo() {
        if (formato === 0) {
            if (selecionado === 0) {
                return <Gramatura />
            } else if (selecionado === 1) {
                return <Quantidade />
            } else if (selecionado === 2) {
                return <Peso />
            } else return <Comprimento />
        } else if (formato === 1) {
            if (selecionado === 0) {
                return <GramaturaRolo />
            } else if (selecionado === 1) {
                return <QuantidadeRolo />
            } else if (selecionado === 2) {
                return <PesoRolo />
            } else return <ComprimentoRolo />
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-2"></div>
                <div className="col-xl-8 col-md-12">
                    <p className="text-white" style={{ textAlign: "justify" }}>
                        Nós ajudamos a evitar o desperdício e, consequentemente, a ser mais competitivo.
                        Para facilitar, desenvolvemos uma calculadora que dará a quantidade exata de folhas por
                        embalagem, gramatura, peso ou, em caso de rolos, comprimento por unidades. Preencha os
                        campos no formulário abaixo e descubra o que precisa. É simples, rápido e prático!
                    </p>
                </div>
                <div className="col-xl-2"></div>
            </div>
            <div className="row">
                <div className="col-xl-1"></div>
                <Formato setFormato={setFormato} />
            </div>
            <div className="row">
                <div className="col-xl-1"></div>
                <Selecionado setSelecionado={setSelecionado} />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="col-md-8 col-sm-12">
                    <Corpo />
                </div>
            </div>
        </div >
    )
}