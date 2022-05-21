import React, { useState } from 'react';
import './style.css';

export default function App2() {
const [students,setStudents]=useState([{name:"abc",mark1:22},{name:"bbc",mark1:24}]);
  return(
    <div>
      {
        students.map( (student)=>
        (<li>{student.name}-{student.mark1}</li>))
        }
      
    </div>
  )
}