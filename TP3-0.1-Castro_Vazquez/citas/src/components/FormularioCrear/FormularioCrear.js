import { useState } from 'react';
import FormularioLinea from '../FormularioLinea/FormularioLinea';
import './FormularioCrear.css';
const FormularioCrear = ({citas, setCitas}) => {
    const [citaValida, setCitaValida] = useState(false);

    const crearCita = (e) => {
        e.preventDefault();
        if (e.target.mascota.value.length >= 2 && e.target.duenio.value.length>=2 &&  e.target.fecha >= Date.now() && e.target.sintomas.value.length > 5){ //VER LO DE LA FECHA
            setCitaValida(true)
        }
        if (setCitaValida){
            if (window.confirm("Deseas crear la cita?")){
            setCitas(
                [
                    ...citas,
                    {
                        id: Date.now(),
                        mascota: e.target.mascota.value,
                        duenio: e.target.duenio.value,
                        fecha: e.target.fecha.value,
                        hora: e.target.hora.value,
                        sintomas: e.target.sintomas.value
                    }
                ]
            )
        }
        }
        
        else {
            alert("Los datos ingresados no son válidos");
        }
    }
    return (
        <form class="" onSubmit={crearCita}>
            <FormularioLinea label="Nombre Mascota" tipo="text" nombre="mascota" class="u-full-width" placeholder="Nombre Mascota"></FormularioLinea>
            <FormularioLinea label="Nombre Dueño" tipo="text" nombre="duenio" class="u-full-width" placeholder="Nombre dueño de la mascota"></FormularioLinea>
            <FormularioLinea label="Fecha" tipo="date" nombre="fecha" class="u-full-width" placeholder=""></FormularioLinea>
            <FormularioLinea label="Hora" tipo="time" nombre="hora" class="u-full-width" placeholder=""></FormularioLinea>
            <FormularioLinea label="Síntomas" tipo="textarea" nombre="sintomas" class="u-full-width" placeholder=""></FormularioLinea>
            <button class="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}

export default FormularioCrear;