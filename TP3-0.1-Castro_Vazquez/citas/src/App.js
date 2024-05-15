import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Cita from './components/Cita/Cita';
import FormularioCrear from './components/FormularioCrear/FormularioCrear';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <body>
        <Titulo></Titulo>
        <div class="container">
          <div class="row">
            <div class="one-half column">
              <Subtitulo texto="CREAR MI CITA"></Subtitulo>
              <FormularioCrear citas={citas} setCitas={setCitas}></FormularioCrear>
            </div>
            <div class="one-half column">
              <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
              <div class="lista-citas">
                  {citas.map(c => <div class="cita"><Cita citas={citas} setCitas={setCitas} nombreMascota={c.mascota} nombreDuenio={c.duenio} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} id={c.id}></Cita></div>)}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
