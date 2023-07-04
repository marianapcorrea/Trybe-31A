import {Component} from 'react';
import './App.css';

class App extends Component() {
  state={
    name: ''
  };
render() {
  const {name} = this.state
  return (
    <div className="App">
    <form>
      <label htmlFor="character">
        Nome completo do personagem:
      </label>
      < input id="character" type="text"
      onChange={this.handleChange}
      value={name}/>
      <button>Buscar</button>
    </form>
    </div>
  );
}
}

export default App;
