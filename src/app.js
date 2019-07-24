import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Charts from "./charts/Charts"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App logo"
          alt="logo" />
          <h2>Welcome to Finance Guru</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Finances" legendPosition="bottom" />

      </div>
    )
  }
}
// function App() {
//     return (
//       <Router>
//         <div>
//           <NavTabs />
//           <Route exact path="/" component={Home} />
//           <Route exact path="/fixed" component={Fixed} />
//           <Route exact path="/profile" component={Profile} />
//           <Route path="/savings" component={Savings} />
//         </div>
//         <div>

//         </div>
//       </Router>
//     );
//   }
  
  export default App;
  
  