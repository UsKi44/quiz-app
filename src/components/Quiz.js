import React from "react";
import "./styles/quiz.css";


function Quiz() {
    return (
        <div className="background">
            <div className="quest_div">
                <p>There will be a question</p>
            </div>
            <div className="answers">
                <div className="part1">
                    <button className="answ1" id="answ1">bla</button>
                    <button className="answ2" id="answ2">bla</button>                
                </div>
                <div className="part2">
                    <button className="answ3" id="answ3">bla</button>
                    <button className="answ4" id="answ4">bla</button>
                </div>
            </div>
            
            

        </div>
    );
}

export default Quiz;