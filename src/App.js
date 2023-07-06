import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Template from "./components/Template";
import Review from "./components/Review";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/main" component={Main} />
        <Route path='/rating' component={Template} />
        <Route path="/review" component={Review} />

      </Switch>
    </Router>
  );
}

export default App;
