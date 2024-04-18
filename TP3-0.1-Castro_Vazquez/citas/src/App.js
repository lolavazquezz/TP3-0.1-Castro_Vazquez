import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import FilaForm from './components/FormularioCrear/FormularioCrear';
import Boton from './components/Boton/Boton';
import BotonBorrar from './components/BotonBorrar/BotonBorrar';
import FormCita from './components/FormCita/FormCita';
function App() {
  return (
    <>
      <Titulo></Titulo>
      <Subtitulo texto="CREAR MI CITA"></Subtitulo>
      <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
      <form>
        <FilaForm tipo="text" label="Nombre Mascota" name="nombreMascota" input="Nombre Mascota"></FilaForm>
        <FilaForm tipo="text" label="Nombre Dueño" name="nombreDuenio" input="Nombre dueño de la mascota"></FilaForm>
        <FilaForm tipo="date" label="Fecha" name="fecha" input=""></FilaForm>
        <FilaForm tipo="time" label="Hora" name="hora" input=""></FilaForm>
        <FilaForm tipo="textarea" label="Sintomas" name="sintomas" input=""></FilaForm>
        <Boton></Boton>
      </form>
      <form>
        <FormCita categoria="Mascota" contenido="Nina"></FormCita>
        <FormCita categoria="Dueño" contenido="Martín"></FormCita>
        <FormCita categoria="Fecha" contenido="2021-08-05"></FormCita>
        <FormCita categoria="Hora" contenido="08:20"></FormCita>
        <FormCita categoria="Síntomas" contenido="Le duele la pierna"></FormCita>
        <BotonBorrar></BotonBorrar>
      </form>
      <form>
        <FormCita categoria="Mascota" contenido="Sifón"></FormCita>
        <FormCita categoria="Dueño" contenido="Flecha"></FormCita>
        <FormCita categoria="Fecha" contenido="2023-08-05"></FormCita>
        <FormCita categoria="Hora" contenido="09:24"></FormCita>
        <FormCita categoria="Síntomas" contenido="Duerme mucho"></FormCita>
        <BotonBorrar></BotonBorrar>
      </form><form>
        <FormCita categoria="Mascota" contenido="Floki"></FormCita>
        <FormCita categoria="Dueño" contenido="Ari"></FormCita>
        <FormCita categoria="Fecha" contenido="2023-08-05"></FormCita>
        <FormCita categoria="Hora" contenido="16:15"></FormCita>
        <FormCita categoria="Síntomas" contenido="No está comiendo"></FormCita>
        <BotonBorrar></BotonBorrar>
      </form>
    </>
  );
}

export default App;
