export default function Resultado(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column w-50" style={{ borderRadius: "25px", backgroundColor: "#8aaed0" }}>
                <div className="d-block align-self-center">{props.titulo}</div>
                <div className="d-block align-self-center">{props.resultado}</div>
            </div>
        </div>
    )
}