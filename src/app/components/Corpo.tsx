import { useState } from "react"
import CampoNumerico from "./CampoNumerico"
import { GrandezaOpcoes } from "./constants"

interface CorpoProps {
    formato: number
    opcao: number
}

export function Corpo(props: CorpoProps) {
    const [campo1, setCampo1] = useState(0.00)
    const [campo2, setCampo2] = useState(0.00)
    const [campo3, setCampo3] = useState(0.00)
    const [campo4, setCampo4] = useState(0.00)
    const [resultado, setResultado] = useState(0.00)

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
        <div>
            <div>
                <CampoNumerico value={campo1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCampo1(+e.target.value)} titulo={GrandezaOpcoes[props.opcao].opcoes[0].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[0].unidade} />
                <CampoNumerico value={campo2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCampo2(+e.target.value)} titulo={GrandezaOpcoes[props.opcao].opcoes[1].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[1].unidade} />
            </div>
            <div>
                <CampoNumerico value={campo3} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCampo3(+e.target.value)} titulo={GrandezaOpcoes[props.opcao].opcoes[2].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[2].unidade} />
                <CampoNumerico value={campo4} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCampo4(+e.target.value)} titulo={GrandezaOpcoes[props.opcao].opcoes[3].titulo} unidade={GrandezaOpcoes[props.opcao].opcoes[3].unidade} />
            </div>
        </div>
    )
}