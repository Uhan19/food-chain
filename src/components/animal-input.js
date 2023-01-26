import { useContext } from "react";
import "./css/animal-input.css";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = e.target.className
        console.log(inputData)
        switch(animal)  {
            case "apex": 
                setApex([
                    ...apex,
                    inputData.apex
                ]);
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
        e.target.reset();
    }

    return (
        <div className="container">
            <span className="name">Apex</span>
            <form className="apex" onSubmit={handleSubmit}>
                <input className= "input" name="apex-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="apex-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="apex-output" onChange={onChange} placeholder="calories output"/>
                <button type="submit">Submit</button>
            </form>
            <span className="name">Predator</span>
            <form className="predator" onSubmit={handleSubmit}>
                <input className= "input" name="predator-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="predator-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="predator-output" onChange={onChange} placeholder="calories output"/>
                <button type="submit">Submit</button>
            </form>
            <span className="name">Herbivore</span>
            <form className="herbivore" onSubmit={handleSubmit}>
                <input className= "input" name="herbivore-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="herbivore-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="herbivore-output" onChange={onChange} placeholder="calories output"/>
                <button type="submit">Submit</button>
            </form>
            <span className="name">Producer</span>
            <form className="producer" onSubmit={handleSubmit}>
                <input className= "input" name="producer-name" onChange={onChange} placeholder="name"/>
                <input className= "input" name="producer-input" onChange={onChange} placeholder="calories input"/>
                <input className= "input" name="producer-output" onChange={onChange} placeholder="calories output"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}