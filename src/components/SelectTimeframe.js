import React from 'react'


const SelectTimeframe = ({ onTimeframeSelected }) => {
  return (
    <>
    <h4>Please Select a Timeframe</h4>
         {['yesterday', 'today', 'tomorrow'].map((timeframe) => (
          <button 
          key={timeframe} 
          onClick={() => onTimeframeSelected(timeframe)}
          className='btn'
          style={{background: 'steelblue'}}
          >{timeframe}</button>
         ))}   
  </>)
  
}

export default SelectTimeframe
