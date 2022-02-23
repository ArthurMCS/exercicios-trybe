import React from 'react';
import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const Alltasks = ['Estudar', 'Treinar', 'Ler', 'etc']

class App extends React.Component{
  render() {
    return (
      <ul>{Alltasks.map((t) => Task(t))}</ul>
    )
  }
}

export default App;
