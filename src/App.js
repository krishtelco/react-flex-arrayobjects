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
  return (
    <div className="flexbox">
      <div className="flexitem">
        <h1>Hello </h1>
        <button onClick={onsubmit}>add</button>{' '}
        <button onClick={() => ondelete('Apple')}>del</button>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </div>
    </div>
  );
}
