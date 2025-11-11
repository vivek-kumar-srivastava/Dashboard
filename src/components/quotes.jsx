import React from 'react'
import DailyTask from './dailyTask';

const Quotes = () => {
    const quotes = ["Focus on goals not obstacles", "Do the work, free from how you feel", "What will you lose if you try?","Aim high bitch!","Do it now, get things done quickly."];

      const randomIndex = Math.floor(Math.random() * quotes.length);

  return (
    <div id='quotes'>
      <div id='quote'>
        <h2>{quotes[randomIndex]}</h2>
      </div>
      <DailyTask/>
    </div>
  )
}

export default Quotes;
