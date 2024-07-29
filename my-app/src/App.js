import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fondo1 from './components/Fondo1';
import Fondo2 from './components/Fondo2';
import Fondo3 from './components/Fondo3';
import Fondo4 from './components/Fondo4';
import Fondo5 from './components/Fondo5';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galeria</h1>
      </div>
      <Routes>
        <Route path="/wal1" element={<Fondo1 className="image-size" />}/>
        <Route path="/wal2" element={<Fondo2 className="image-size" />}/>
        <Route path="/wal3" element={<Fondo3 className="image-size" />}/>
        <Route path="/wal4" element={<Fondo4 className="image-size" />}/>
        <Route path="/wal5" element={<Fondo5 className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router >
  );
}
export default App;
