import './App.css'
// ---------------------
// COMPONENTES
// ---------------------
import Cabecera from './pages/Cabecera/Cabecera'
import Home from './pages/Home/Home'
import Empresa from './pages/Empresa/Empresa'
import Alumno from './pages/Alumno/Alumno'
import Centro from './pages/Centro/Centro'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container'>
        <Cabecera />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/alumno' element={<Alumno />} />
            <Route path='/centroeducativo' element={<Centro />} />
        </Routes>
      </div>
    </>
  )
}
export default App
