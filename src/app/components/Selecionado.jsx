'use client'

import styles from "../styles/Selecionado.module.css"
import { useState } from "react"

export default function Selecionado(props) {
    const [selecionado, setSelecionado] = useState(0)

    const botaoClick = (seletor) => {
        setSelecionado(seletor)
        props.setSelecionado(seletor)
        props.setReset(true)
    }

    return (
        <div className={styles.flexContainer}>
            <div className={styles.title}>
                Selecione o que quer descobrir
            </div>
            <div className={styles.optionsContainer}>
                <div className={styles.options}>
                    <button style={{ marginRight: '10px' }} className={
                        selecionado === 0 ? 'button1Active' : 'button1'}
                        onClick={() => botaoClick(0)}>Gramatura</button>
                    <button style={{ marginRight: '10px' }} className={
                        selecionado === 1 ? 'button1Active' : 'button1'}
                        onClick={() => botaoClick(1)}>Quantidade</button>
                </div>
                <div className={styles.options}>
                    <button style={{ marginRight: '10px' }} className={
                        selecionado === 2 ? 'button1Active' : 'button1'}
                        onClick={() => botaoClick(2)}>Peso</button>
                    <button className={
                        selecionado === 3 ? 'button1Active' : 'button1'}
                        onClick={() => botaoClick(3)}>Comprimento</button>
                </div>
            </div>

        </div >
    )
}