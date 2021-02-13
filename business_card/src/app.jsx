import styles from './app.module.css';
import Login from './components/logIn/login'
import Header from './components/header/header'
import Maker from './components/maker/maker';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App({authService}) {


  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Login authService={authService} />
          </Route>

          <Route exact path="/maker">
            <Maker authService={authService} />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
