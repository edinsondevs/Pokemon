import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Init from './Components/Pages/Init.js';
import LandingPage from './Components/Pages/LandingPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch >
          {/* Landing Page */}
          <Route path="/" exact >
            <LandingPage />
          </Route>
          {/* Resto de la app */}
          <Route path="/*" >
            <Init />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
