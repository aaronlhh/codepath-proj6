import React from "react";

const Card = ({number, label}) => {

    return (
        <div className="Card">
            <h1 className="number">{number}</h1>
            <h2>{label}</h2>
        </div>
    );
};

export default Card;