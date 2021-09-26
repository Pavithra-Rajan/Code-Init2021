import React from 'react';
import { useState } from 'react';

import './App.css';
import Entry from './entry';
import Table from './components/Table/Table';
import CanvPrint from './components/Print/CanvPrint';

function App() {
  const [final,setFinal]=useState({"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","P":"","Q":"","R":"","S":"","T":""})
  const [model2, setModel2] = useState([
    {"day":"Monday","slots":[]},
    {"day":"Tuesday","slots":[]},
    {"day":"Wednesday","slots":[]},
    {"day":"Thursday","slots":[]},
    {"day":"Friday","slots":[]}
]);
  return (
    <div className="App">
      <h1>TimeTable App</h1>
      <div id="page">
        <Entry final={final} setFinal={setFinal}/>
        <Table final={final} model2={model2} setModel2={setModel2}></Table>
        <CanvPrint></CanvPrint>
      </div>
    </div>
  );
}

export default App;