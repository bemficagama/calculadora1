import Image from "next/image"


export default function Cabecalho() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Image
                        src="/calc/logo.png"
                        width={123}
                        height={92}
                        alt="Mili Profissional"
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="nav" style={{fontWeight: "bold"}}>
                            <a className="nav-link active" aria-current="page" href="../index.html">HOME</a>
                            <a className="nav-link" href="../index.html#sobre">SOBRE</a>
                            <a className="nav-link" href="../index.html#solucoes">REPRESENTANTES</a>
                            <a className="nav-link" href="../index.html#produtos">PRODUTOS</a>
                            <a className="nav-link" href="../calc">CALCULADORA</a>
                            <a className="nav-link" href="http://blog.miliprofessional.com.br/">BLOG</a>
                            <a className="nav-link" href="../carreiras.html">CARREIRAS</a>
                            <a className="nav-link" href="../index.html#contato">CONTATO</a>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}