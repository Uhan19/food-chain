import { useContext } from 'react';
import "./css/animal-factory.css"
import { AnimalDisplay } from "./animal-display";
import AppContext from "../app-context";
import { animalMap } from '../helpers';

export const AnimalFactory = () => {
    const {
        apex,
        setApex,
        predator,
        setPredator,
        herbivore,
        setHerbivore,
        producer,
        setProducer,
    } = useContext(AppContext);
    const animals = [apex, predator, herbivore, producer];
    const handleDelete = (e) => {
        const parentNodeId = e.target.parentNode.id;
        const species = animalMap[parentNodeId[0]];
        const animalIndex = Number(parentNodeId[1]);
        switch(species) {
            case "apex":
                setApex(
                    apex.slice(0,animalIndex).concat(apex.slice(animalIndex+1))
                )
            break;
            case "predator":
                setPredator(
                    predator.slice(0,animalIndex).concat(predator.slice(animalIndex+1))
                )
            break;
            case "herbivore":
                setHerbivore(
                    herbivore.slice(0,animalIndex).concat(herbivore.slice(animalIndex+1))
                )
            break;
            case "producer":
                setProducer(
                    producer.slice(0,animalIndex).concat(producer.slice(animalIndex+1))
                )
            break;
            default:
            break;
        }
    }

    return (
        <div className="animal-factory-container">
            {animals.map((species, i) => {
                if (species?.length) {
                    return (
                        <div className="animal-row">
                            {species.map((animal, index) => {
                                return (
                                    <AnimalDisplay animal={animal} species={i} index={index} handleDelete={handleDelete}/>
                                )
                            })}
                        </div>
                    )
                }
            })}
        </div>
    )
}