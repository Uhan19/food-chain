import "./animal-display.css";

export const AnimalDisplay = ({animal, s}) => {
    const { name, input, output } = animal
    return (
        <div className="animal-display-container">
            <div>Calories out: {input}</div>
            <div>{name}</div>
            <div>Calories in: {output}</div>
        </div>
    )
}