import './App.css';
// ---------------------
// COMPONENTES
// ---------------------
import Cabecera from './pages/Cabecera/Cabecera';
import Home from './pages/Home/Home';
import Empresa from './pages/Empresa/Empresa';
import Alumno from './pages/Alumno/Alumno';
import Centro from './pages/Centro/Centro';
import { Routes, Route } from 'react-router-dom';
import IdiomaContext from './contexto/idiomaContext';
import useIdioma from './hooks/useIdioma';
import EmpresaProyecto from './pages/Proyectos/EmpresaProyecto';

function App() {

  // Utilizo el custom hook creado para gestionar el idioma
  const language = useIdioma();

  return (
    <>
      <IdiomaContext.Provider value={language.idioma}>
        <div className='app-container'>
          <Cabecera asignarIdioma={language.asignarIdioma} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/empresa/*' element={<Empresa />} />
            <Route path='/alumno' element={<Alumno />} />
            <Route path='/centroeducativo' element={<Centro />} />
            <Route path="/empresa/proyectos" element={<EmpresaProyecto />} />
          </Routes>
        </div>
      </IdiomaContext.Provider>
    </>
  )
}
export default App
