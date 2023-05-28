import React from "react";
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.eng}</div>
            </div>
            <div className="front back">
                <div className="han">{props.han}</div>
                <div className="pin">{props.pin}</div>
                <div className="pt">{props.pt}</div>
            </div>
        </div>
    </div>
)

export default Card