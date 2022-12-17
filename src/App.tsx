import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo.toString()} className="App-logo" alt="logo" />
        <p>Successfully Deployed <code>A React application</code> to Netlify with CircleCI</p>
      </header>
      {/* <main className='App-main'>
        <p>this is main content</p>
      </main>
      <footer className='App-footer'>
        <small>this is sample footer text</small>
      </footer> */}
    </div>
  );
};
