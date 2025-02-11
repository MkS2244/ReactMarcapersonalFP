import './App.css'
// ---------------------
// COMPONENTES
// ---------------------
import Cabecera from './pages/header/Cabecera'
import Home from './pages/Home/Home'
import Empresa from './components/Empresa/Empresa'
import Alumno from './components/Alumno/Alumno'
import Centro from './components/Centro/Centro'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
        <Cabecera />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/alumno' element={<Alumno />} />
            <Route path='/centroeducativo' element={<Centro />} />
        </Routes>
    </>
  )
}

export default App
