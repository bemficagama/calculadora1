import { useState, useEffect } from "react"
import CampoNumerico from './CampoNumerico'
import Resultado from './Resultado'


export default function Gramatura() {
    const [largura, setLargura] = useState(0.00)
    const [gramatura, setGramatura] = useState(0.00)
    const [comprimento, setComprimento] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [peso, setPeso] = useState(0)

    useEffect(() => {
        // Update the document title using the browser API
        updateGramatura()
    });

    const updateGramatura = () => {
        const temp = Math.round(((+peso / +quantidade / +comprimento / +largura) * 100000 * 100) * 100) / 100
        setGramatura(temp ? temp : 0.00)
    }

    const larguraChange = (value: number) => {
        setLargura(value)
    }

    const comprimentoChange = (value: number) => {
        setComprimento(value)
    }

    const quantidadeChange = (value: number) => {
        setQuantidade(value)
    }

    const pesoChange = (value: number) => {
        setPeso(value)
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <CampoNumerico value={largura} onChange={larguraChange} titulo="Largura" unidade="(cm) Centímetros" />
                </div>
                <div className="col">
                    <CampoNumerico value={comprimento} onChange={comprimentoChange} titulo="Comprimento" unidade="(cm) Centímetros" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <CampoNumerico value={quantidade} onChange={quantidadeChange} titulo="Quantidade" unidade="(Fls) Folhas" />
                </div>
                <div className="col">
                    <CampoNumerico value={peso} onChange={pesoChange} titulo="Peso" unidade="(Kg) Quilogramas" />
                </div>
            </div>

            <div>
                <Resultado resultado={gramatura} titulo="Gramatura (g/m²)" />
            </div>
        </>
    )
}