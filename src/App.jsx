import './App.css'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Inicio from './pages/Inicio';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/acerca-de-nosotros' element />
          <Route path='/categorias' element />
          <Route path='/tu-carrito' element />
        </Routes>
      </Router>
    </>
  )
}

export default App
