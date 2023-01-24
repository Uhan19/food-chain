import react from "react";
import "./animal-input.css";

export const AnimalInput = (props) => {
    return (
        <div className="container">
            <span className="name">Apex Animal</span>
            <div>
                <input className= "input" placeholder="name"/>
                <input className= "input" placeholder="calories in"/>
                <input className= "input" placeholder="calories out"/>
            </div>
            <span className="name">Predator</span>
            <div>
                <input className= "input" placeholder="name"/>
                <input className= "input" placeholder="calories in"/>
                <input className= "input" placeholder="calories out"/>
            </div>
            <span className="name">Herbivore</span>
            <div>
                <input className= "input" placeholder="name"/>
                <input className= "input" placeholder="calories in"/>
                <input className= "input" placeholder="calories out"/>
            </div>
            <span className="name">Producer</span>
            <div>
                <input className= "input" placeholder="name"/>
                <input className= "input" placeholder="calories in"/>
                <input className= "input" placeholder="calories out"/>
            </div>
        </div>
    )
}