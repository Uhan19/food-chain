
import './App.css';
import { useState } from "react";
import { AnimalInput } from './components/animal-input';
import { AnimalFactory } from "./components/animal-factory";
import AppContext from "./app-context";

const App = () => {

  const [ apex, setApex ] = useState([{
    "name": "tiger",
    "input": 2000,
    "output": 0,
  }])

  const [ predator, setPredator ] = useState([{
      "name": "fox",
      "input": 2800,
      "output": 2600,
  }, {
      "name": "snake",
      "input": 1500,
      "output": 1300,
  }])

  const [ herbivore, setHerbivore ] = useState([{
      "name": "mouse",
      "input": 3100,
      "output": 3000,
    }, {
      "name": "squirrel",
      "input": 2000,
      "output": 1500,
    }])

  const [ producer, setProducer ] = useState([{
    "name": "grass",
    "input": 0,
    "output": 1000,
  }, {
    "name": "mushroom",
    "input": 0,
    "output": 2500,
  }, {
    "name": "berries",
    "in": 0,
    "out": 3000,
  }])

  return (
    <AppContext.Provider value={{
      apex,
      predator, 
      herbivore, 
      producer, 
      setApex,
      setPredator,
      setHerbivore,
      setProducer
    }}>
      <div className="App">
        <AnimalInput />
        <AnimalFactory />
      </div>
    </AppContext.Provider>
  );
}

export default App;
