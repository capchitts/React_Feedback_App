import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext);

  console.log(Array.isArray(feedback)+" in feedback stats");

  const average = feedback.reduce((acc, curr) => {return acc += curr.rating},0)/(feedback.length);
  
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:{isNaN(average) ? 0: average}</h4>
    </div>
  )
}


export default FeedbackStats
