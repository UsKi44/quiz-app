import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css"

function Header() {
    return (
        <nav>
            <div className="header">
            <div className="home_click">
                <Link to="/Header">
                    Quiz
                </Link>
                
                
            </div>
            <Link to="/choose">
                <button className="chs_category">Choose Category</button>
            </Link>
            
        </div>
        </nav>
        
    );
}

export default Header;