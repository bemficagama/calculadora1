'use client'

import { useState} from "react"
import Formato from "./Formato"
import Selecionado from "./Selecionado"
import styles from "../styles/Selecao.module.css"
import { Corpo } from "./Corpo"


export function Selecao() {
    const [selecionado, setSelecionado] = useState(0)
    const [formato, setFormato] = useState(0)

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
