import Clock from "react-live-clock";
import Select from 'react-select';
import './App.css';

const App = () => {
  const agente = localStorage.getItem('Agente') || 'bonare';
  const request = () => {
    setTimeout(() => {
      return window.close(), 4000
    });
  }

  const options = [
    { value: 'banheiro', label: 'Banheiro', bgcolor: "white", color: "black" },
    { value: 'lanche', label: 'Lanche', bgcolor: "white", color: "black"  },
    { value: 'cafe', label: 'Café', bgcolor: "white", color: "black"  },
    { value: 'reunião', label: 'Reunião', bgcolor: "white", color: "black"  },
    { value: 'almoco', label: 'Almoço', bgcolor: "white", color: "black"  },
    { value: 'fumar', label: 'Fumar', bgcolor: "white", color: "black"  },
    { value: 'ginastica', label: 'Ginástica laboral', bgcolor: "white", color: "black"  },
  ]

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.data.color,
      backgroundColor: state.data.bgcolor,
      padding: 8,
    })
  };

  return (
    <div className="App">
      <form className="App-header">
        <Clock format={'HH:mm:ss'} style={{fontSize: '60px'}} ticking={true} timezone={'US/Pacific'} />
        <p className="Agente"> {agente} </p>
        <p className="Motivo"> Motivo do intervalo: </p>
          <div className="Container">
          <Select myFontSize="12px" options={options} placeholder={" "} styles={styles} />
          </div>
        <button className="Button" id="submit" onClick={request}>Submit</button>
      </form>
    </div>
  );
}

export default App;
