
import './App.css'
import Languages from './components/Languages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Language from './components/Language'

function App() {
  
// Definir rutas
  return (
    <>

    <Router>

      <Routes>

      <Route path="/" element={<Languages />} />

      <Route path="/api/languages/:_id" element={<Language />} />
        
      </Routes>
    </Router>
    
      
    </>
  )
}

export default App
