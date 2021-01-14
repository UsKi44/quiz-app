import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css"

function Header() {
    return (
        <div className="header">
            <div className="home_click">
                <a href="#">
                    Quiz
                </a>
                
            </div>
            <Link to="/choose">
                <button className="chs_category">Choose Category</button>
            </Link>
            
        </div>
    );
}

export default Header;