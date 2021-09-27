import './App.css';

function App() {
  return (
    <div className="App">
      <form className="App-header">
        <div id="time"></div>
        <label id="nomeAgente"></label>
        <label for="lname">Motivo do intervalo:</label>
        <select id="cars">
          <option value="Banheiro">Banheiro</option>
          <option value="Fumar">Fumar</option>
          <option value="Cafe">Cafe</option>
          <option value="Dormir">Dormir</option>
        </select>
        <button id="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
