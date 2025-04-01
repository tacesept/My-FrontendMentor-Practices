 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Menu from './components/Menu'; 
 import Game from './components/Game';

function App() { 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} /> 
      </Routes>
    </Router>
  )
}

export default App
