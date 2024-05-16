import "./Cita.css";
import { useState } from 'react';
const Cita = ({nombreMascota, nombreDuenio, fecha, hora, sintomas, id, citas, setCitas}) => {
    const eliminar = () => {
        if (window.confirm("Deseas eliminar la cita?")){
            setCitas(citas.filter(c => c.id !== id))
        }
        
    }
    return (
        <div class="cita">

            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{nombreDuenio}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button onClick={eliminar} class="button elimnar u-full-width" >Eliminar ×</button>
        </div>
    )
}

export default Cita;