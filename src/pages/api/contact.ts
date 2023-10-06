import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    from: string,
    to: string,
    nome: string,
    email: string,
    mensagem: string
  }

  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    let nodeoutlook = require('nodejs-nodemailer-outlook')

    const MAIL: Data = {
        from: process.env.MAIL_FROM!,
        to: process.env.MAIL_TO!,
        nome: req.body.nome!,
        email: req.body.email!,
        mensagem: req.body.mensagem! = 'Usou a calculadora de papéis'
    }

    nodeoutlook.sendEmail({
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
        from: MAIL.from,
        to: MAIL.to,
        subject: `Calculadora de Papéis - DE: ${MAIL.nome}`,
        //html: '<b>This is bold text</b>',
        text: req.body.mensagem + " | Sent from: " + MAIL.email,
        html: `<div>${MAIL.mensagem}</div><p>Enviado por: ${MAIL.email}</p>`,
        //replyTo: 'receiverXXX@gmail.com',
        onError: (e : any) => {
            console.log(e)
            res.status(500)
        },
        onSuccess: (i : any) => {
            console.log(i)
            res.status(200).json(MAIL)
        }

    })
}