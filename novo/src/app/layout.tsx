import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "./components/importBsJS";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Cabecalho from './components/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora de Papéis',
  description: 'Calculadora para verificar qualidade dos papéis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImportBsJS />
        <Cabecalho />
        {children}
      </body>
    </html>
  )
}
