import React from "react";
import "./components/styles/app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>
        <Header />
        

      </nav>
      <Switch>
        <Route path="/choose" component={Body}/>
        <Route path="/Quiz" component={Quiz}/>
      </Switch>
      
    </Router>
  );
}

export default App;
