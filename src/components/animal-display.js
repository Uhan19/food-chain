import "./animal-display.css";

export const AnimalDisplay = ({animal}) => {
    const { name, caloriesIn, caloriesOut } = animal
    console.log("caloriesIn", caloriesIn)
    return (
        <div className="animal-display-container">
            <div>Calories out: {caloriesOut}</div>
            <div>{name}</div>
            <div>Calories in: {caloriesIn}</div>
        </div>
    )
}