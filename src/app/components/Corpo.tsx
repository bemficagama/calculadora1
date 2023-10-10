'use client'

import styles from '../styles/Corpo.module.css'
import { useEffect, useState } from "react"
import CampoNumerico from "./CampoNumerico"
import { GrandezaOpcoes } from "./constants"
import Resultado from './Resultado'

interface CorpoProps {
    formato: number
    opcao: number
    reset: boolean
    setReset: (p1: boolean) => void
}

export function Corpo(props: CorpoProps) {
    const [campo1, setCampo1] = useState(0.00)
    const [campo2, setCampo2] = useState(0.00)
    const [campo3, setCampo3] = useState(0.00)
    const [campo4, setCampo4] = useState(0.00)
    const [resultado, setResultado] = useState(0.00)

    useEffect(() => {
        updateResultado()
        if(props.reset) {
           setCampo1(0.00)
           setCampo2(0.00)
           setCampo3(0.00)
           setCampo4(0.00)
           props.setReset(false)
        }
    });

    const updateResultado = () => {
        const temp = GrandezaOpcoes[props.opcao].resultado.formulas[props.formato](campo1, campo2, campo3, campo4)
        setResultado(temp ? temp : 0.00)
    }

    const campo1Change = (value: number) => {
        setCampo1(value)
    }

    const campo2Change = (value: number) => {
        setCampo2(value)
    }

    const campo3Change = (value: number) => {
        setCampo3(value)
    }

    const campo4Change = (value: number) => {
        setCampo4(value)
    }
    //<CampoNumerico value={largura} onChange={larguraChange} titulo="Largura" unidade="(cm) Centímetros" />
    //<Resultado resultado={gramatura} titulo="Gramatura (g/m²)" />

    return (
        <div className={styles.flexContainer}>
            <div className={styles.flexGroup}>
                <div>
                    <CampoNumerico value={campo1} onChange={(v: number) => setCampo1(v)} titulo={GrandezaOpcoes[props.opcao].opcoes[0].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[0].unidade[props.formato]} />
                    <CampoNumerico value={campo2} onChange={(v: number) => setCampo2(v)} titulo={GrandezaOpcoes[props.opcao].opcoes[1].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[1].unidade[props.formato]} />
                </div>
                <div>
                    <CampoNumerico value={campo3} onChange={(v: number) => setCampo3(v)} titulo={GrandezaOpcoes[props.opcao].opcoes[2].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[2].unidade[props.formato]} />
                    <CampoNumerico value={campo4} onChange={(v: number) => setCampo4(v)} titulo={GrandezaOpcoes[props.opcao].opcoes[3].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[3].unidade[props.formato]} />
                </div>
            </div>

            <Resultado resultado={resultado} titulo={GrandezaOpcoes[props.opcao].resultado.unidade[props.formato]} />

        </div>
    )
}