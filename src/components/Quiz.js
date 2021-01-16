import React, { useState, useEffect } from "react";
import "./styles/quiz.css";



function Quiz() {
    
    const [questions, setQuestions] = useState([]);
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [checkedAnswers, setCheckedAnswers] = useState(null);
    const [checkedIndex, setCheckedIndex] = useState(null);
    const [correctAnswer, setCorrectAnswer ] = useState('');
    const [answerClass, setAnswerClass ] = useState('');
    const [questionNum, setQuestionNum] = useState(0);
    const [point, setPoint] = useState(0);

    useEffect(() => {
        let parsedUrl = window.location.search.toLowerCase();
        fetch(`https://opentdb.com/api.php?amount=10&${parsedUrl.replace('?', '')}&type=multiple`)
            .then(res => res.json())
            .then((data)=> {
                setQuestions(data.results);           
                const bla = [...data.results[questionNum].incorrect_answers, data.results[questionNum].correct_answer];
                setCurrentAnswers(shuffle(bla));
                setCorrectAnswer(data.results[questionNum].correct_answer)
            });
            
    },[questionNum]);


    const shuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5)
    }


    const checkAnswer = (answer, i) => {
        setCheckedIndex(i);
        if (questions[questionNum].correct_answer === answer ) {
            setCheckedAnswers(true);
            setAnswerClass('correct')
            setTimeout(() => {
                setAnswerClass('')                              
                setPoint(point + 1);
            }, 1000);
        } else {
            setAnswerClass('incorrect');
            setTimeout(() => {
                setAnswerClass('')
                setQuestionNum(questionNum + 1);                
            }, 1000);
                    
        }
        if (questionNum != 9 ) {
            setQuestionNum(questionNum + 1);
        }if (questionNum == 9) {
           window.location.href = `http://localhost:3000/final?point=${point}`
           
            
        }   
    }
    


    

   
    return questions.length > 0 ? (
        
        <div className="background">
            <div className="statInfo">
                <div className="questNumb">
                    <h2>Question Number: {questionNum}</h2>
                    
                </div>
                <div className="points">
                    <h2>Points: {point}</h2>
                </div>
                
            </div>
            
            <div className="quest_div">
                <p dangerouslySetInnerHTML ={{__html:questions[questionNum].question}}/>
            </div>
            <div className="answers">
                {
                    currentAnswers.map((answer, index) => {
                        return <button  key={index} className={`${index === checkedIndex ? answerClass : ''}`  } onClick={() => checkAnswer(answer, index)}>{answer}</button>
                    })
                }                
            </div>
        </div>
        ) : (
            <h1>Loading...</h1>
        )
    
}

export default Quiz;