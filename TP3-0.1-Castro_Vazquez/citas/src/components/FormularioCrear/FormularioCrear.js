import './FormularioCrear.css';

const FilaForm = ({tipo, label, nombre, input}) => {
    return <div> 
        <p>{label}</p>
        { tipo === 'textarea' ? <textarea></textarea> : <input type={tipo} name={nombre} placeholder={input}></input>}
    </div>;
}

export default FilaForm;