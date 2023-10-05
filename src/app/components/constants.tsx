interface IGrandeza {
    titulo: string
    unidade: Array<string>
    formulas: Array<(p1: number, p2: number, p3: number, p4: number) => number>
}

interface IOpcoes {
    opcoes: Array<IGrandeza>
    resultado: IGrandeza
}

const fGramatura: Array<(p1: number, p2: number, p3: number, p4: number) => number> =
[
    (largura: number, comprimento: number, quantidade: number, peso: number) => Math.round(((+peso / +quantidade / +comprimento / +largura) * 100000 * 100) * 100) / 100,
    (largura: number, comprimento: number, quantidade: number, peso: number) => Math.round(((+peso / +quantidade / +comprimento / +largura) * 100000 * 1) * 1000) / 1000
]

const fQuantidade: Array<(p1: number, p2: number, p3: number, p4: number) => number> =
[
    (largura: number, comprimento: number, gramatura: number, peso: number) => Math.round(((+peso / +gramatura / +comprimento / +largura) * 100000 * 100) * 1) / 1,
    (largura: number, comprimento: number, gramatura: number, peso: number) => Math.round(((+peso / +gramatura / +comprimento / +largura) * 100000 * 1) * 1) / 1
]

const fPeso: Array<(p1: number, p2: number, p3: number, p4: number) => number> =
[
    (largura: number, comprimento: number, gramatura: number, quantidade: number) => Math.round(((+largura * +comprimento * (+gramatura / 100000) * quantidade) / 100) * 1000) / 1000,
    (largura: number, comprimento: number, gramatura: number, quantidade: number) => Math.round(((+largura * +comprimento * (+gramatura / 100000) * quantidade) / 1) * 1000) / 1000
]

const fComprimento: Array<(p1: number, p2: number, p3: number, p4: number) => number> =
[
    (largura: number, quantidade: number, gramatura: number, peso: number) => Math.round(((+peso / +quantidade / (+gramatura / 100000) * 100) / +largura) * 100) / 100,
    (largura: number, quantidade: number, gramatura: number, peso: number) => Math.round(((+peso / +quantidade / (+gramatura / 100000) * 1) / +largura) * 100) / 100
]

const gGramatura: IGrandeza = {titulo: 'Gramatura', unidade: ['(g/m²) Gramatura', '(g/m²) Gramatura'], formulas: fGramatura }
const gQuantidade: IGrandeza = { titulo: 'Quantidade', unidade: ['(Fls) Folhas', '(un) Unidades'], formulas: fQuantidade }
const gPeso: IGrandeza = { titulo: 'Peso', unidade: ['(Kg) Quilogramas', '(Kg) Quilogramas'], formulas: fPeso }
const gComprimento: IGrandeza = { titulo: 'Comprimento', unidade: ['(cm) Centímetros', '(m) Metros'], formulas: fComprimento }
const gLargura: IGrandeza =  { titulo: 'Largura', unidade: ['(cm) Centímetros', '(cm) Centímetros'], formulas: [] }

export const GrandezaOpcoes: Array<IOpcoes> = [
    {opcoes: [gLargura, gComprimento, gQuantidade, gPeso], resultado: gGramatura},
    {opcoes: [gLargura, gComprimento, gGramatura, gPeso], resultado: gQuantidade},
    {opcoes: [gLargura, gComprimento, gGramatura, gQuantidade], resultado: gPeso},
    {opcoes: [gLargura, gQuantidade, gGramatura, gPeso], resultado: gComprimento},
]
