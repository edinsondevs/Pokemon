import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Init from './Components/Pages/Init.js';
import LandingPage from './Components/Pages/LandingPage.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch >
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/*" component={Init} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
