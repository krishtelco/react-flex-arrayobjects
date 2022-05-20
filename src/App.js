import React, { useState } from 'react';
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
    
    let index= fruits.indexOf(item);
    setFruits([...fruits.slice(0,index), ...fruits.slice(index+1,fruits.length)]);

    
  };
  return (
    <div className="flexbox">
      <div className="flexitem">
        <h1>Hello </h1>
        <button onClick={onsubmit}>add</button>{' '}
        <button onClick={() => ondelete('Apple')}>del</button>
        {' '}
        <button onClick={() => ondelete2('Orange')}>del2</button>
        <br/>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </div>
    </div>
  );
}
