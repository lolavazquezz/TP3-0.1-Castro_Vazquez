import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Cita from './components/Cita/Cita';
import FormularioCrear from './components/FormularioCrear/FormularioCrear';
function App() {
  return (
    <>
      <body>
      <Titulo></Titulo>
      <div class="container">
        <div class="row">
        <div class="one-half column">
        <Subtitulo texto="CREAR MI CITA"></Subtitulo>
        <FormularioCrear></FormularioCrear> 
      </div>
      <div class="one-half column"> 
        <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
          <div class="lista-citas">
          <div class="cita">
            <Cita nombreMascota='Nina' nombreDuenio='Martín' fecha='2021-08-05' hora='08:20' sintomas='Le duele la pierna'></Cita>
            </div>
            <div class="cita">
            <Cita nombreMascota='Sifón' nombreDuenio='Flecha' fecha='2023-08-05' hora='09:24' sintomas='Duerme mucho'></Cita>
            </div>
            <div class="cita">
            <Cita nombreMascota='Floki' nombreDuenio='Ari' fecha='2023-08-05' hora='16:15' sintomas='No está comiendo'></Cita>
            </div>          
          </div>
          </div>
          </div>
          </div>
      </body>
    </>
  );
}

export default App;
