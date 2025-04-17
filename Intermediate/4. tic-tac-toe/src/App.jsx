import { useState } from 'react';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {
  const [screen, setScreen] = useState('menu');

  const handleScreen = (screen) => {
    setScreen(screen);
  }

  return (
    <main className='container'>
      {screen === 'menu' && <Menu handleScreen={handleScreen} />}
      {screen === 'game' && <Game handleScreen={handleScreen} />}
    </main>
  )
}

export default App;