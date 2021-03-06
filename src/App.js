import React, { useState } from 'react';
import App2 from './App2';
import './style.css';

export default function App() {
  const [fruits, setFruits] = useState(['Banana', 'Orange', 'Apple', 'Mango']);

  const onsubmit = () => {
    setFruits([...fruits, 'newfruit']);
  };
  const ondelete = (item) => {
    let oldfruits = [...fruits];

    oldfruits.splice(oldfruits.indexOf(item), 1);

    setFruits([...oldfruits]);
  };
  const ondelete2 = (item) => {
    let index = fruits.indexOf(item);
    setFruits([
      ...fruits.slice(0, index),
      ...fruits.slice(index + 1, fruits.length),
    ]);
  };
  const ondelete4 = (item) => {
    let index = fruits.indexOf(item);
    setFruits(fruits.filter((fruit) => fruit !== item));
    
  };
  const onModify = (i,item) => {
    let newfruits= [...fruits];
    newfruits[i]=item;
    setFruits([...newfruits]);
  };
  return (
    <div className="flexbox">
      <div className="flexitem">
        <h1>Fruits </h1>
        <button onClick={onsubmit}>add</button>{' '}
        <button onClick={() => ondelete('Apple')}>del</button>{' '}
        <button onClick={() => ondelete2('Orange')}>del2</button>{' '}
        <button onClick={() => ondelete4('Mango')}>del4</button>{' '}
        <button onClick={() => onModify(2,'Mango2')}>mod</button>{' '}
        <br />
        <div className="emptyline"></div>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
        <h1>Students</h1>
        <App2/>
      </div>
    </div>
  );
}
