import React from 'react';
import './App.scss';
import Menu from '../navegacio';
import ReactDOM from 'react-dom/client';
import Main from '../parallaxmenu';
import Navbar from '../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar /> {/* Correctly add the Navbar component */}
      <Menu />
      <Main />
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
