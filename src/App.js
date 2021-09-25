
import './App.css';
import Entry from './entry';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  const [final,setFinal]=useState({"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","P":"","Q":"","R":"","S":"","T":""})
  return (
    <div className="App">
      <h1>TimeTable App</h1>
      <Entry final={final} setFinal={setFinal}/>
      <Table final={final}></Table>
    </div>
  );
}

export default App;
