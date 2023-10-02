import { useState, useEffect } from "react"
import CampoNumerico from './CampoNumerico'
import Resultado from './Resultado'


export default function Comprimento() {
    const [largura, setLargura] = useState(0.00)
    const [gramatura, setGramatura] = useState(0.00)
    const [comprimento, setComprimento] = useState(0)
    const [quantidade, setQuantidade] = useState(0)
    const [peso, setPeso] = useState(0)

    useEffect(() => {
        // Update the document title using the browser API
        updateComprimento()
    });

    const updateComprimento = () => {
        const temp = Math.round(((+peso / +quantidade / (+gramatura / 100000) * 100) / +largura) * 100) / 100
        setComprimento(temp? temp : 0.00)
    }

    const larguraChange = (value) => {
        setLargura(value)
    }

    const quantidadeChange = (value) => {
        setQuantidade(value)
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
                    <CampoNumerico value={quantidade} onChange={quantidadeChange} titulo="Quantidade" unidade="(Fls) Folhas" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CampoNumerico value={gramatura} onChange={gramaturaChange} titulo="Gramatura" unidade="(g/m²) gramas por metro quadrado" />
                </div>
                <div className="col">
                    <CampoNumerico value={peso} onChange={pesoChange} titulo="Peso" unidade="(Kg) Quilogramas"/>
                </div>
            </div>
            <div className="col text-center">
                <Resultado resultado={comprimento} titulo="Comprimento (cm)" />
            </div>

        </>
    )
}