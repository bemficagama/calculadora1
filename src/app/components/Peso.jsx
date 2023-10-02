import { useState, useEffect } from "react"
import CampoNumerico from './CampoNumerico'
import Resultado from './Resultado'


export default function Peso() {
    const [largura, setLargura] = useState(0.00)
    const [gramatura, setGramatura] = useState(0.00)
    const [comprimento, setComprimento] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [peso, setPeso] = useState(0)

    useEffect(() => {
        // Update the document title using the browser API
        updatePeso()
    });

    const updatePeso = () => {
        setPeso(Math.round(((+largura * +comprimento * (+ gramatura / 100000) * quantidade) / 100) * 1000) / 1000)
    }

    const larguraChange = (value) => {
        setLargura(value)
    }

    const comprimentoChange = (value) => {
        setComprimento(value)
    }

    const gramaturaChange = (value) => {
        setGramatura(value)
    }

    const quantidadeChange = (value) => {
        setQuantidade(value)
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
                    <CampoNumerico value={gramatura} onChange={gramaturaChange} titulo="Gramatura" unidade="(g/m²) gramas por metro quadrado"/>
                </div>
                <div className="col">
                    <CampoNumerico value={quantidade} onChange={quantidadeChange} titulo="Quantidade" unidade="(Fls) Folhas" />
                </div>
            </div>
            <div className="col text-center">
                <Resultado resultado={peso} titulo="Peso (Kg)" />
            </div>

        </>
    )
}