import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/fixed" component={Fixed} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/savings" component={Savings} />
        </div>
      </Router>
    );
  }
  
  export default App;
  
  