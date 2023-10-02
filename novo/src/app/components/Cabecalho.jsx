import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Cabecalho.module.css'


export default function Cabecalho() {
    return (
        <div>
            <nav className={styles.topNav}>
                <Link href={'/'}>
                    <Image
                        src="/img/logo.png"
                        width={123}
                        height={92}
                        alt="Mili Profissional"
                    />
                </Link>
                <div className={styles.flexContainer}>
                    <Link href={'https://microben.com.br'} className={styles.flexItem} target="_blank" >MICROBEN</Link>
                    <Link href={'/sobre'} className={styles.flexItem}>SOBRE</Link>
                </div>
            </nav>
        </div>
    )
}