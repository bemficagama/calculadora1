import styles from '../styles/CampoNumerico.module.css'

export default function CampoNumerico(props) {
    //console.log(props)
    return (
        <>
        <div className="input-group input-group-sm">
            <span className={styles.inputLabel} id="inputGroup-sizing-sm">{props.titulo}</span>
            <input type="number" value={props.value} onChange={(ev) => props.onChange(ev.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <p className="mb-3"><small>{props.unidade}</small></p>
        
        </>
    )
}