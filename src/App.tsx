import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SomeComponent } from './components/some/some.component';

const getRandomInt = (min: number = 0, max: number = 100) => {
  if (min > max) {
      throw new Error('min must be less or equals to max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomItems = () => {
  return new Array(5).fill(0).reduce((prev, _, index) => {
    const id = index + 1;
    const value = getRandomInt();
    prev.push({id, value});
    return prev;
  }, []);
};

export const App: React.FC = () => {
  const items = generateRandomItems();

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo.toString()} className="App-logo" alt="logo" />
        <p>Successfully Deployed <code>A React application</code> to Netlify with CircleCI</p>
        <div>
          <SomeComponent items={items}></SomeComponent>
        </div>
      </header>
    </div>
  );
};
