import React,{useState,useEffect} from "react";
import "./styles/body.css";
import { Link } from 'react-router-dom';




function Body() {

    const [categories, setCategories] = useState([]);
    const [select, setSelect] = useState(9);
    const [questions, setQuestions] = useState([]);
    const [difficulty, setDifficulty] = useState('easy');

    const categoryUrl = "https://opentdb.com/api_category.php";

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${select}&difficulty=easy&type=multiple`)
        .then(response => response.json())
        .then(json => setQuestions(json));
        
        fetch(categoryUrl)
        .then(response => response.json())
        .then(json => setCategories(json.trivia_categories));
        
    }, [select])
    


    const selectHandler = (e) => {
        let index = e.target.selectedIndex;
        let optionElement = e.target.childNodes[index]
        let option =  optionElement.getAttribute('data-id'); 

        setSelect(option);
    }

     

    

    return(
        <div className="body_syze">

            <div className="container">
                <label htmlFor="category" className="category_container">                
                    <select name="category" className="category_selector" id="categorySelector" onChange={(e) => selectHandler(e)}>
                        {
                            categories.map(category => {
                                return <option value={category.name} data-id={category.id} key={category.id}> {category.name} </option> 
                            })
                            
                        }
                        
                    </select>
                </label>
                <label htmlFor="difficulty" className="difficulty_container" id="difficulty">
                    <select name="difficulty" className="difficulty_selector" id="difficultySelector" onChange={(e) => setDifficulty(e.target.value)} >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>  
                    </select>
                </label>
                {/* <Link to="/Quiz"  className="button_link"> */}
                    <Link to={`/Quiz?category=${select}&difficulty=${difficulty}`}  className="button_link" >
                        <button className="start" id="startGame" >
                            Start Game     
                        </button>
                    </Link>    
                    
                {/* </Link> */}
            </div>

            
            

        </div>
    );
}

export default Body;