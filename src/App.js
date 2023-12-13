import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar';
import Pag2 from './componentes/Pag2';
import Pag3 from './componentes/Pag3';
import Pag4 from './componentes/Pag4';
import Pag5 from './componentes/Pag5';
import Pag6 from './componentes/Pag6';
import Pag7 from './componentes/Pag7';
import Pag8 from  './componentes/Pag8';
import Pag9 from './componentes/Pag9';
import Pag1 from './componentes/Pag1';
function App() {
  return (
    <div >
      <h1>TIENDA DE ARTÍCULOS TECNOLÓGICOS</h1>
      <h2>MENU</h2>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path="Pag1" element={<Pag1/>}/>
          <Route path="Pag2" element={<Pag2/>}/>
          <Route path="Pag3" element={<Pag3/>}/>
          <Route path="Pag4" element={<Pag4/>}/>
          <Route path="Pag5" element={<Pag5/>}/>
          <Route path="Pag6" element={<Pag6/>}/>
          <Route path="Pag7" element={<Pag7/>}/>
          <Route path="Pag8" element={<Pag8/>}/>
          <Route path="Pag9" element={<Pag9/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
