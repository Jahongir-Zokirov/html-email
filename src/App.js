import React from 'react';
import './App.css';
import Header from './components/header/header';
import ToUser from './components/toUser/toUser';
import MainContent from './components/mainContent/mainContent';

function App() {
  return (
    <div>
        <Header />
        <ToUser />
        <MainContent />
    </div>
  );
}

export default App;
