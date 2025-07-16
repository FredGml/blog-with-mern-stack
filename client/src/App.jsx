import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import Dashboard from './pages/Dashbord'
import Projets from './pages/Projets'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Inscription" element={<Inscription/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Projets" element={<Projets/>} />

        </Routes>
    
    
    </BrowserRouter>
  )
}
