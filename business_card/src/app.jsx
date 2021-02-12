import styles from './app.module.css';
import LogIn from './components/logIn/logIn'
import Header from './components/header/header'


function App() {



  return (
    <div className="App">

      {/* LogIn Page */}
      <div>
        <Header />
        <LogIn />
      </div>



    </div>
  );
}

export default App;
