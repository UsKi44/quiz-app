import React from "react";
import "./components/styles/app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Quiz from "./components/Quiz";
import Final from "./components/FinalPage";
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
        

      
      <Switch>        
        <Route path="/choose" component={Body}/>
        <Route path="/Quiz" component={Quiz}/>          
        <Route path="/Final" component={Final}/>
      </Switch>
      
    </Router>
  );
}

export default App;
