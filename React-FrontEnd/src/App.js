import React from 'react';
import './App.css';
import Sidebar from './component/sidebar';
import Header from './component/header';
import Project from './component/project';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
