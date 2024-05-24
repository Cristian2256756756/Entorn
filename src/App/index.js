import React from 'react';
import './App.scss';
import Menu from '../navegacio';
import ReactDOM from 'react-dom/client';
import Main from '../parallaxmenu';


function App() {
 return (
  <div>
    <div className="App">
      <header className="App-header">
      </header>
      
        <Menu/>
        <Main/>
    </div>
  
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
