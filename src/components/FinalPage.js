import React from "react";
import "./styles/final.css";
import { Link } from "react-router-dom";



function FinalPage() {
    let point = (window.location.search.split(''));
    return (
        <div className="mainContent">
            <h1>Your score is: {point[point.length - 1]}</h1>
            <Link to="/choose">
                <button  className="finalButton"> Try Again</button>
            </Link>
            
        </div>
    )
}

export default FinalPage;