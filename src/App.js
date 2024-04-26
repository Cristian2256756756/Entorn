import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton'; 
import ReactDOM from 'react-dom/client';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Editar <code>src/App.js</code> y guarda tu aplicación
        </p>
        <p>
          <button>MyButton</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Aprender React
        </a>
      </header>

    </div>
    
 );
}
function MyForm(){
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default App;
