import './FormularioLinea.css';

const FormularioLinea = ({tipo, nombre, label, placeholder}) => {
    return (
        <>
            <label>{label}</label>
            { tipo === 'textarea' ? <textarea class="u-full-width"></textarea> : <input type={tipo} name={nombre} placeholder={placeholder} class="u-full-width"></input>}
        </>  
    )
}

export default FormularioLinea;