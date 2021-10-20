import React from 'react';
import './app-header.css';



const AppHeader = ({numbersTodoDone}) => {
  
//  numbersTodoDone.map()
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2> more to do,  done</h2>
    </div>
  );
};

export default AppHeader;
