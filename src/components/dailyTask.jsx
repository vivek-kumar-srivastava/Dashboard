import React, { useState } from 'react'
import Notes from './notes';

const DailyTask = () => {
    const tasks = ["Code or Learn at least two things.","Learn new Words.","Jogging + Dumbbells." , "Novel Writing."];
  return (
    <div id='tasks'>
      <div id='taskMain'>
        {tasks.map((task,i)=>{
        return <div id='task'>
             <li key={i}>{task}</li>
            </div>
      })}
      </div>
      <Notes/>
    </div>
  )
}

export default DailyTask
