import { useContext } from 'react';
import "./animal-factory.css"
import { AnimalDisplay } from "./animal-display";
import AppContext from "../app-context";

export const AnimalFactory = () => {
    const { apex, predator, herbivore, producer} = useContext(AppContext);

    return (
        <div className="animal-factory-container">
            <div className="animal-row">
                {apex.map((animal) => {
                    return <AnimalDisplay animal={animal}/>
                })}
            </div>
            <div className="animal-row">
                {predator.map((animal) => {
                    return <AnimalDisplay animal={animal}/>
                })}
            </div>
            <div className="animal-row">
                {herbivore.map((animal) => {
                    return <AnimalDisplay animal={animal}/>
                })}
            </div>
            <div className="animal-row">
                {producer.map((animal) => {
                    return <AnimalDisplay animal={animal}/>
                })}
            </div>
        </div>
    )
}