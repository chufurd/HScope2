import React from 'react'
import { getSigns } from '../services/api'
import { useEffect, useState } from "react";

const SelectSign = ({ onSignselected }) => {

  const [signs, setSigns] =useState([])
  const [selectedSign, setSelectedSign] = useState(null)

  useEffect(() => {
    getSigns().then(setSigns)
  }, [])


  return ( <>
    <h4>Please Select Sign</h4>
      <p>{selectedSign}</p>
         {signs.map((sign) => (
          <button 
          key={sign} 
          onClick={() => onSignselected(sign)}
          className='btn'
          style={{background: 'steelblue'}}
          >{sign}</button>
         ))}   
  </>)
}

export default SelectSign