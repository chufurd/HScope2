import React from 'react'
import { useState, useEffect } from 'react'
import { getHororscope } from '../services/api'

const Hororscope = ({ sign, timeframe}) => {

  const [hororscope, setHororscope] = useState([])

  useEffect(() => {
    getHororscope(sign, timeframe).then(setHororscope)
  }, [sign, timeframe])

  return (
    <p>
      <h3>{timeframe}, your horoscope for {sign} is...</h3>
      {hororscope}</p>
  )
}

export default Hororscope