import { useContext } from "react";
import "./animal-input.css";
import AppContext from "../app-context";

export const AnimalInput = () => {
    const { 
        apex, 
        setApex,
        predator,
        setPredator,
        herbivore,
        setHerbivore,
        producer,
        setProducer
    } = useContext(AppContext);

    let inputData = {
        "apex": {},
        "predator": {},
        "herbivore": {},
        "producer": {}
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        const animal = (name.includes("apex") && "apex") || name.includes("predator") && "predator"
                        || name.includes("herbivore") && "herbivore" 
                        || name.includes("producer") && "producer" || "";
        const attribute = name.includes("name") && "name" || name.includes("input") && "input" 
                        || name.includes("output") && "output";
        inputData[animal][attribute] = value;
    }

    const onSubmit = (e) => {
        const animal = e.target.parentNode.className;
        switch(animal)  {
            case "apex": 
                setApex([
                    ...apex,
                    inputData.apex
                ])
            break;
            case "predator": 
                setPredator([
                    ...predator,
                    inputData.predator
                ])
            break;
            case "herbivore": 
                setHerbivore([
                    ...herbivore,
                    inputData.herbivore
                ])
            break;
            case "producer": 
                setProducer([
                    ...producer,
                    inputData.producer
                ])
            break;
            default:
            break;
        }

    }

    return (
        <div className="container">
            <span className="name">Apex Animal</span>
            <div className="apex">
                <input className= "input" name="apex-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="apex-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="apex-output" onChange={onChange} placeholder="calories output"/>
                <button name="submit" onClick={onSubmit}>Submit</button>
            </div>
            <span className="name">Predator</span>
            <div className="predator">
                <input className= "input" name="predator-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="predator-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="predator-output" onChange={onChange} placeholder="calories output"/>
                <button name="submit" onClick={onSubmit}>Submit</button>
            </div>
            <span className="name">Herbivore</span>
            <div className="herbivore">
                <input className= "input" name="herbivore-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="herbivore-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="herbivore-output" onChange={onChange} placeholder="calories output"/>
                <button name="submit" onClick={onSubmit}>Submit</button>
            </div>
            <span className="name">Producer</span>
            <div className="producer">
                <input className= "input" name="producer-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="producer-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="producer-output" onChange={onChange} placeholder="calories output"/>
                <button name="submit" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}