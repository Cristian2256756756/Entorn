import React from 'react';
import './App.scss';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar /> 
  
    </div>
  );
}

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
