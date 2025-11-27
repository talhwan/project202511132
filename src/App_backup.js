import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Garage from './Garage';
import HelloBtn from './HelloBtn';
import HelloBtn2 from './HelloBtn2';
import HelloBtn3 from './HelloBtn3';
import UseStateTest from './UseStateTest';
import UseStateTest2 from './UseStateTest2';
import Counter from './components/Counter';
import SearchBox from './components/SearchBox';
import RefTest from './components/RefTest';
import LastClickTime from './components/LastClickTime';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <RefTest />

        <LastClickTime />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          alert~! <code>src/App.js</code> and save to reload.
        </p>

        <Hello name="112233" />
        <Garage />

        <HelloBtn />
        <HelloBtn2 />
        <HelloBtn3 />
        <UseStateTest />
        <UseStateTest2 />

        <Counter />

        <SearchBox />
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
