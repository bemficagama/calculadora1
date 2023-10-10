'use client'

import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Cabecalho.module.css'


export default function Cabecalho() {

    const sobreOnClick = (e) => {
        alert('A Calculadora foi idealizada por uma Indústria de Papéis que queria disponibilizar para seus Clientes ' +
        'essa ferramenta, tendo como principal objetivo de verificar, de forma prática, se as descrições nas embalagens ' +
        'de papéis refletem o seu conteúdo.')
    }

    return (
        <div>
            <nav className={styles.topNav}>
                <Link href={'/'} className={styles.logo}>
                    {/* <Image
                        src="/img/logo.png"
                        width={123}
                        height={92}
                        alt="Mili Profissional"
                    /> */}
                    CALCULADORA
                    <p className={styles.logoSubTitulo} >para Papéis</p>
                </Link>
                <div className={styles.flexContainer}>
                    {/* <Link href={'https://microben.com.br'} className={styles.flexItem} target="_blank" >MICROBEN</Link> */}
                    <Link href={'#'} className={styles.flexItem} onClick={(e) => sobreOnClick(e)}>SOBRE</Link>
                </div>
            </nav>
        </div>
    )
}