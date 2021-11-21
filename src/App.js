//import Options from './components/Options';
import Clock from 'react-live-clock'
import Select from 'react-select';
import axios from 'axios';
import { nanoid } from 'nanoid'
import { useState } from 'react';

import './App.css';


const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [clockTime, updateClockTime] = useState(null);
  const [id, updateId] = useState(null);
  const [agent, updateAgent] = useState('Usuario');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = nanoid(10)
    const response = await axios.post('http://localhost:8080/pause', {
      "Reason": selectedOption.value, "Agent": agent, "Pause": clockTime, "Id": id
    });
    console.log(response);
    return localStorage.setItem('Id', id);
  }

  const data = [
    { value: 'banheiro', label: 'Banheiro', bgcolor: "white", color: "black" },
    { value: 'lanche', label: 'Lanche', bgcolor: "white", color: "black" },
    { value: 'cafe', label: 'Café', bgcolor: "white", color: "black" },
    { value: 'reunião', label: 'Reunião', bgcolor: "white", color: "black" },
    { value: 'almoco', label: 'Almoço', bgcolor: "white", color: "black" },
    { value: 'fumar', label: 'Fumar', bgcolor: "white", color: "black" },
    { value: 'ginastica', label: 'Ginástica laboral', bgcolor: "white", color: "black" },
  ]

  const handleChange = (event) => {
    setSelectedOption(event);
  }

  const handleClockChange = (event) => {
    updateAgent(localStorage.getItem('Agente'))
    updateId(localStorage.getItem('Id'))
    updateClockTime(event);
  }

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: state.data.color,
      padding: 8,
    })
  };


  setId(localStorage.getItem('Id'))
    /* const response = await axios.patch(`http://localhost:8080/pause/:${id}`, {
      "Pause": clockTime
    }); */

  return (
    <div className="App">
      <form className="App-header" onSubmit={handleSubmit} >
        <Clock
          format={'HH:mm'} style={{ fontSize: '60px' }}
          onChange={handleClockChange} ticking={true} timezone={'America/Sao_Paulo'}
        />
        <p className="Agente"> {agent} </p>
        <p className="Motivo"> Motivo do intervalo: </p>
        <div className="Container">
          <Select
            placeholder="Pausa" value={selectedOption}
            options={data} onChange={handleChange} styles={styles}
          />
        </div>
        <button className="Button"> Submit </button>
      </form >
    </div>
  )
}

export default App;