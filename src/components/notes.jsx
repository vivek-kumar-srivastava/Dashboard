import React from 'react'

const Notes = () => {
    const notes = ["Watch geo or history in free time"];
  return (
    <div id='notes'>
      <div id='taskMain'>
        {notes.map((note)=>{
            return <div id='note'>
                <li>{note}</li>
                </div>
        })}
      </div>
    </div>
  )
}

export default Notes;
