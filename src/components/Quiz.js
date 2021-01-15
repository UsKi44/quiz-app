import React, { useState, useEffect } from "react";
import "./styles/quiz.css";

const easyApi = "https://opentdb.com/api.php?amount=10&difficulty=easy"

function Quiz() {
    
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(easyApi)
            .then(res => res.json())
            .then((data)=> {
                setQuestions(data.results);
            });
    })

    return questions.length > 0 ? (
        
        <div className="background">
            {/* <div className="quest_div">
                <p>Here will be a question</p>
            </div>
            <div className="answers">
                <div className="part1">
                    <button className="answ1" id="answ1">{questions[0].correct_answer}</button>
                    <button className="answ2" id="answ2">{questions[0].incorrect_answers}</button>                
                </div>
                <div className="part2">
                    <button className="answ3" id="answ3">{questions[1].incorrect_answers}</button>
                    <button className="answ4" id="answ4">{questions[2].incorrect_answers}</button>
                </div>
            </div> */}
        </div>
        ) : (
            <h1>Loading...</h1>
        )
    
}

export default Quiz;