import React from 'react';
import logo from './logo.svg';
import './App.css';
import CellGame from './CellGame';

function App() {
  return (
    <>
      <div className="Container_table">
        <CellGame id={1} m={2} />
        <CellGame id={2} m={2} />
        <CellGame id={3} m={2} />
        <CellGame id={4} m={2} />
        <CellGame id={5} m={2} />
        <CellGame id={6} m={2} />
        <CellGame id={7} m={2} />
        <CellGame id={8} m={2} />
        <CellGame id={9} m={2} />
        <CellGame id={10} m={2} />
        <CellGame id={11} m={2} />
        <CellGame id={12} m={2} />
        <CellGame id={13} m={2} />
        <CellGame id={14} m={2} />
        <CellGame id={15} m={2} />
        <CellGame id={16} m={2} />
      </div>
    </>
  );
}

export default App;
