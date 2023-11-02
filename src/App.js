import './App.css';
import MiniDrawer from './components/menu/sidebar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumenEjecutivo from './pages/ResumenEjecutivo/ResumenEjecutivo';
import PlanDeNegocios from './pages/plandenegocios/PlanDeNegocios';
import PlanEstrategico from './pages/PlanEstratégico/PlanEstrategico';
import PlanDeMarketing from './pages/PlanDeMarketing/PlanDeMarketing';
import PlanRRHH from './pages/RRHH/PlanRRHH';

function App() {

  return (
    <Router>
      <MiniDrawer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ResumenEjecutivo" element={<ResumenEjecutivo/>}/>
        <Route path="/PlandeNegocios" element={<PlanDeNegocios />} />
        <Route path="/PlanEstrategico" element={<PlanEstrategico />} />
        <Route path="/PlanDeMarketing" element={<PlanDeMarketing />} />
        <Route path="/PlanDeRecursosHumanos" element={<PlanRRHH />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;