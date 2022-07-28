import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Cartfree from "./Cart-free";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          
          <Switch>
            <Route exact path="/">
              <Cart />
            </Route>

            <Route>
              <Cartfree />
            </Route>
          </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
