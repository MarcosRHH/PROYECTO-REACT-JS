import logo from './logo.svg';
import './App.css';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4';
import { Didmount } from './hooks/lifecycle/DidMount';
import Greetingstyled from './components/pure/greetingStyled';
/* import Clock from './components/pure/clockClass'; */
import Clock from './components/pure/clockFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Didmount/> */}
        {/* <Greetingstyled name="Martín"></Greetingstyled> */}
        <Clock></Clock>
      </header> 
    
    </div>
  );
}

export default App;
