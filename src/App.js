import Select from 'react-select';
import Clock from 'react-live-clock';
import { useState } from 'react';
import './App.css';

const App = () => {

  //Agente
  const agent = localStorage.getItem('Agente') || 'bonare';
/* const request = () => {
    setTimeout(() => window.close(), 4000);
  } */

  //Options
  const data = [
      { value: 'banheiro', label: 'Banheiro', bgcolor: "white", color: "black" },
      { value: 'lanche', label: 'Lanche', bgcolor: "white", color: "black"  },
      { value: 'cafe', label: 'Café', bgcolor: "white", color: "black"  },
      { value: 'reunião', label: 'Reunião', bgcolor: "white", color: "black"  },
      { value: 'almoco', label: 'Almoço', bgcolor: "white", color: "black"  },
      { value: 'fumar', label: 'Fumar', bgcolor: "white", color: "black"  },
      { value: 'ginastica', label: 'Ginástica laboral', bgcolor: "white", color: "black"  },
  ]
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
      setSelectedOption(event);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      agent: agent,
      reason: selectedOption
    };

    const response = await fetch('http://localhost:8080/pausa/1', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(data)
    });
    const addedData = await response.json();
    return console.log(addedData);
  }

  const styles = {
      option: (provided, state) => ({
        ...provided,
        color: state.data.color,
        padding: 8,
      })
    };

  //Render
  return (
    <form className="App-header" onSubmit={handleSubmit} >
      <Clock format={'HH:mm:ss'} style={{fontSize: '60px'}} ticking={true} timezone={'America/Sao_Paulo'} />
      <p className="Agente"> {agent} </p>
      <p className="Motivo"> Motivo do intervalo: </p>
        <div className="Container">
          <div>
          <Select
            placeholder="Motivo"
            value={selectedOption} // set selected value
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
            styles={styles}/>
          </div>
        </div>
      <button className="Button" id="submit">Submit</button>
  </form>
  );
}

export default App;
