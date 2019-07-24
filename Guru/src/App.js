import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Fixed from "./components/pages/Fixed";
import Profile from "./components/pages/Profile";
import Savings from "./components/pages/Savings";
import Debt from "./components/pages/Debt";
import Variable from "./components/pages/Variable";
import NavTabs from "./components/NavTabs"


function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/fixed" component={Fixed} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/savings" component={Savings} />
          <Route path="/debt" component={Debt} />
          <Route path="/variable" component={Variable} />
        </div>
      </Router>
    );
  }
  
  export default App;
  
  