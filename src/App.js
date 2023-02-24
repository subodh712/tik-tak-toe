import { useState } from 'react';
import './App.css';
import AppButton, { ButtonTypes } from './Components/AppButton';
import ConfigGame from './Game/ConfigComponent';
import TikTakToe from './Game/tik-tak-toe';
import { SlGameController } from "react-icons/sl";

function App() {
  const [boardSize, setBoardSize] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tik - Tak - Toe</h1>
      </header>
      <div className='config-button'>
        <AppButton onClick={() => setBoardSize(0)} type={ButtonTypes.IconButton} icon={<SlGameController />} />
      </div>

      {boardSize ? <TikTakToe boardSize={boardSize} /> : <ConfigGame setBoardSize={setBoardSize} />}

    </div>
  );
}

export default App;
