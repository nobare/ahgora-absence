import Clock from 'react-live-clock'
import Options from './components/Options';

import './App.css';

const App = () => {
  const handleSubmit = async (data) => {
    console.log(data);
  }

  const agente = localStorage.getItem('Agente') || 'bonare';
  const request = () => {
    setTimeout(() => window.close(), 4000);
  }

  return (
    <div className="App">
      <form className="App-header" onSubmit={handleSubmit}>
        <Clock format={'HH:mm:ss'} style={{fontSize: '60px'}} ticking={true} timezone={'America/Sao_Paulo'} />
        <p className="Agente"> {agente} </p>
        <p className="Motivo"> Motivo do intervalo: </p>
          <div className="Container">
          <Options />
          </div>
        <button className="Button" id="submit" onClick={request}>Submit</button>
      </form>
    </div>
  );
}

export default App;
