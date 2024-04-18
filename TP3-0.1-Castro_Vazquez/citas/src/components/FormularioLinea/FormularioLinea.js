import './FormularioLinea.css';

const FormularioLinea = ({tipo, nombre, label, placeholder}) => {
    return (
        <>
            <label>{label}</label>
            { tipo === 'textarea' ? <textarea></textarea> : <input type={tipo} name={nombre} placeholder={placeholder}></input>}
        </>  
    )
}

export default FormularioLinea;