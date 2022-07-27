import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Init from './Components/Pages/Init.js';
import LandingPage from './Components/Pages/LandingPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch >
          <Route path="/" exact >
            <LandingPage />
          </Route>
          <Route path="/*" >
            <Init />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
