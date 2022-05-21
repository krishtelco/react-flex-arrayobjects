import React, { useState } from 'react';
import './style.css';

export default function App2() {
  const [students, setStudents] = useState([
    { name: 'abc', mark1: 22 },
    { name: 'bbc', mark1: 24 },
    { name: 'sun', mark1: 27 },
    { name: 'moon', mark1: 72 },
  ]);

  const add=()=>{

  }
  const del=()=>{

  }
  const modify=()=>{

  }
  return (
    <div>
      <button onClick={add}>add</button>{' '}
      <button onClick={del}>del</button>{' '}
      <button onClick={modify}>mod</button>{' '}
      {students.map((student) => (
        <li>
          {student.name}-{student.mark1}
        </li>
      ))}
    </div>
  );
}
