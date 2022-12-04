import { Button } from 'antd';
import './App.css';
import logo from './logo.svg';
import './output.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 class="text-4xl font-bold underline bg-red-600">
        Hello world!!
      </h1>
      <Button type="primary">ABCD</Button>
    </div>
  );
}

export default App;
