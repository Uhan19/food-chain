import "./css/animal-display.css";

export const AnimalDisplay = ({animal, species, index, handleDelete}) => {
    const { name, input, output } = animal
    return (
        <div className="animal-display-container" id={`${species}${index}`}>
            <div>Calories out: {output}</div>
            <div>{name}</div>
            <div>Calories in: {input}</div>
            <button onClick={handleDelete} className="delete-animal-button">Delete</button>
        </div>
    )
}