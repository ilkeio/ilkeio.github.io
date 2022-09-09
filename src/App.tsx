import React from 'react';
import profile from './profile.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="Profile-photo" alt="profile photo" />
      </header>
    </div>
  );
}

export default App;
