import { useState, useEffect } from "react"
import CampoNumerico from './CampoNumerico'
import Resultado from './Resultado'


export default function QuantidadeRolo() {
    const [largura, setLargura] = useState(0.00)
    const [gramatura, setGramatura] = useState(0.00)
    const [comprimento, setComprimento] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [peso, setPeso] = useState(0)

    useEffect(() => {
        // Update the document title using the browser API
        updateQuantidade()
    });

    const updateQuantidade = () => {
        const temp = Math.round(((+peso / +gramatura / +comprimento / +largura) * 100000 * 1) * 1) / 1
        setQuantidade(temp? temp : 0)
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

    const pesoChange = (value) => {
        setPeso(value)
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <CampoNumerico value={largura} onChange={larguraChange} titulo="Largura" unidade="(cm) Centímetros" />
                </div>
                <div className="col">
                    <CampoNumerico value={comprimento} onChange={comprimentoChange} titulo="Comprimento" unidade="(m) Metros" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CampoNumerico value={gramatura} onChange={gramaturaChange} titulo="Gramatura" unidade="(g/m²) Gramatura"/>
                </div>
                <div className="col">
                    <CampoNumerico value={peso} onChange={pesoChange} titulo="Peso" unidade="(Kg) Quilogramas" />
                </div>
            </div>
            <div className="col text-center">
                <Resultado resultado={quantidade} titulo="Quantidade (un)" />
            </div>

        </>
    )
}