import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import './App.css'

import './App.css';
import Entry from './entry';
import Table from './components/Table/Table';
import Print from './components/Print/print';
import { useState } from 'react';

function App() {
  const [final,setFinal]=useState({"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","P":"","Q":"","R":"","S":"","T":""})
  return (
    <div className="App">
      <h1>TimeTable App</h1>
      <Entry final={final} setFinal={setFinal}/>
      <Table final={final}></Table>
      {/* <Print final={final}></Print> */}
    </div>
  );
}

export default App;