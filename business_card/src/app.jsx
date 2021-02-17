import styles from './app.module.css';
import Login from './components/logIn/login'
import Header from './components/header/header'
import Maker from './components/maker/maker';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App({FileInput, authService, cardRepository}) {


  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Login authService={authService} />
          </Route>

          <Route exact path="/maker">
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
