import FormularioLinea from '../FormularioLinea/FormularioLinea';
import './FormularioCrear.css';

const FormularioCrear = () => {
    return (
        <form class="">
            <FormularioLinea label="Nombre Mascota" tipo="text" nombre="mascota" class="u-full-width" placeholder="Nombre Mascota"></FormularioLinea>
            <FormularioLinea label="Nombre Dueño" tipo="text" nombre="duenio" class="u-full-width" placeholder="Nombre dueño de la mascota"></FormularioLinea>
            <FormularioLinea label="Fecha" tipo="text" nombre="fecha" class="u-full-width" placeholder=""></FormularioLinea>
            <FormularioLinea label="Hora" tipo="text" nombre="hora" class="u-full-width" placeholder=""></FormularioLinea>
            <FormularioLinea label="Síntomas" tipo="text" nombre="sintomas" class="u-full-width" placeholder=""></FormularioLinea>
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}

export default FormularioCrear;