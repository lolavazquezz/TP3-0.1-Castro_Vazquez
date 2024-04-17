import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo/Titulo';
import Subtitulo from './components/subtitulo/Subtitulo';

function App() {
  return (
    <>
      <Titulo></Titulo>
      <Subtitulo texto="CREAR MI CITA"></Subtitulo>
      <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
    </>
  );
}

export default App;
