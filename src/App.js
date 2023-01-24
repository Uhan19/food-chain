
import { useState } from "react";
import './App.css';
import { AnimalInput } from './components/animal-input';
import { AnimalFactory } from "./components/animal-factory";

const App = () => {
  const [ apex, setApex ] = useState([{
    name: "tiger",
    caloriesIn: 0,
    caloriesOut: 0,
  }])

  const [ predator, setPredator ] = useState([{
    name: "fox",
    caloriesIn: 0,
    caloriesOut: 0,
  }])
  
  const [ herbivore, setHerbivore ] = useState([{
    name: "mouse",
    caloriesIn: 0,
    caloriesOut: 0,
  }, {
    name: "mouse",
    caloriesIn: 0,
    caloriesOut: 0,
  }])

  const [ producer, setProducer ] = useState([{
    name: "grass",
    caloriesIn: 0,
    caloriesOut: 0,
  }])

  return (
    <div className="App">
      <AnimalInput />
      <div className="animals-container">
        <AnimalFactory animals={apex}/>
        <AnimalFactory animals={predator}/>
        <AnimalFactory animals={herbivore}/>
        <AnimalFactory animals={producer}/>
      </div>
    </div>
  );
}

export default App;
