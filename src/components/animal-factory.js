import "./animal-factory.css"
import { AnimalDisplay } from "./animal-display";

export const AnimalFactory = (props) => {
    const { animals } = props;
    console.log(animals)
    return (
        <div className="animal-factory-container">
            {animals.map((animal) => {
                return <AnimalDisplay animal={animal} />
            })}
        </div>
    )
}