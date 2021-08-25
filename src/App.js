import "./App.css";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import Details from "./Screens/Details";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Screens/Login";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
