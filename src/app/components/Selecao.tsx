'use client'

import { useState, useEffect } from "react"
import Gramatura from "./Gramatura"
import Quantidade from "./Quantidade"
import Peso from "./Peso"
import GramaturaRolo from "./GramaturaRolo"
import QuantidadeRolo from "./QuantidadeRolo"
import PesoRolo from "./PesoRolo"
import Comprimento from "./Comprimento"
import ComprimentoRolo from "./ComprimentoRolo"
import Formato from "./Formato"
import Selecionado from "./Selecionado"
import styles from "../styles/Selecao.module.css"
import { Corpo } from "./Corpo"


export function Selecao() {
    const [selecionado, setSelecionado] = useState(0)
    const [formato, setFormato] = useState(0)

    function Corpo1() {
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
        <div className={styles.flexContainer}>
            <div className={styles.flexGroup}>
                <p className={styles.descricao}>
                    Nós ajudamos a evitar o desperdício e, consequentemente, a ser mais competitivo.
                    Para facilitar, desenvolvemos uma calculadora que dará a quantidade exata de folhas por
                    embalagem, gramatura, peso ou, em caso de rolos, comprimento por unidades. Preencha os
                    campos no formulário abaixo e descubra o que precisa. É simples, rápido e prático!
                </p>
            </div>

            <div className={styles.flexGroup}>
                <Formato setFormato={setFormato} />
            </div>
            <div className={styles.flexGroup}>
                <Selecionado setSelecionado={setSelecionado} />
            </div>
            <div className={styles.flexGroup}>
                <Corpo formato={formato} opcao={selecionado} />
            </div>
        </div >
    )
}
