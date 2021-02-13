import styles from './app.module.css';
import Login from './components/logIn/login'


function App({authService}) {



  return (
    <div>
        <Login authService={authService}/>
    </div>
  );
}

export default App;
