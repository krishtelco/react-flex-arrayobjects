import React, { useState } from 'react';
import './style.css';

export default function App2() {
  const [students, setStudents] = useState([
    { name: 'abc', mark1: 22 },
    { name: 'bbc', mark1: 24 },
    { name: 'sun', mark1: 27 },
    { name: 'moon', mark1: 72 },
  ]);

  const newstudent = { name: 'new', mark1: 82 };

  const add = (newitem) => {
    //setStudents([...students,{...newitem}]); //also ok
    setStudents([...students, newitem]);
  };
  const del4 = (sname) => {
    let oldstudents = [...students];
    let index = students.findIndex((stuobj) => stuobj.name == sname);
    if (index != -1) {
      oldstudents.splice(index, 1);
      setStudents([...oldstudents]);
    }
  };
  const del2 = (sname) => {
    let index = students.findIndex((stuobj) => stuobj.name == sname);
    if (index != -1) {
      setStudents([
        ...students.slice(0, index),
        ...students.slice(index + 1, students.lenght),
      ]);
    }
  };
  const del = (sname) => {
    let newarray = students.filter((student) => student.name !== sname);
    setStudents(newarray);
  };
  const modify = (sname, mark) => {
    let index = students.findIndex((stuobj) => stuobj.name == sname);
    let newstudent = { ...students[index], ['mark1']: mark };
    
    let oldstudents = [...students];
    oldstudents[index] = newstudent;
    setStudents([...oldstudents]);
  };
  const modify1 = (sname, mark) => {
    let index = students.findIndex((stuobj) => stuobj.name == sname);
    setStudents(
      Object.values({
        ...students,
        [index]: { ...students[index], mark1: mark },
      })
    );
  };
  return (
    <div>
      <button onClick={() => add(newstudent)}>add</button>{' '}
      <button onClick={() => del('bbc')}>del</button>{' '}
      <button onClick={() => del2('abc')}>del2</button>{' '}
      <button onClick={() => del4('sun')}>del4</button>{' '}
      <button onClick={() => modify('bbc', 55)}>mod</button>{' '}
      <button onClick={() => modify1('bbc', 55)}>mod1</button>
      <div className="emptyline"></div>
      {students.map((student) => (
        <li>
          {student.name}-{student.mark1}
        </li>
      ))}
    </div>
  );
}
