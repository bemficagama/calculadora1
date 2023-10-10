import { useState, useEffect } from "react"
import styles from "../styles/Formato.module.css"

export default function Formato(props) {
    const [selecionado, setSelecionado] = useState(0)

    const botaoClick = (seletor) => {
        setSelecionado(seletor)
        props.setFormato(seletor)
        props.setReset(true)
    }

    return (
        <div className={styles.flexContainer}>
            <div className={styles.title}>
                Selecione o formato do produto
            </div>
            <div className={styles.flexOptions}>
                <button style={{marginRight: '10px'}} className={
                    selecionado === 0 ? 'button buttonGreen' : 'button buttonGray'}
                    onClick={() => botaoClick(0)}>Folhas</button>
                <button className={
                    selecionado === 1 ? 'button buttonGreen' : 'button buttonGray'}
                    onClick={() => botaoClick(1)}>Rolos</button>
            </div>
        </div>
    )
}