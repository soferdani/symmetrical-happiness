import './App.css';

import {useState} from 'react';


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1 style={{ color: "blue" }} >this is the H1</h1>
      <button onClick={() => setShow(!show)}> show</button>

      {show && <p style={{fontFamily: "monospace", color: "red"}} >Daniel sofer</p>}
    </div>
  );
}

export default App;
