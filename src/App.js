import { useState } from "react";
import SelectTimeframe from "./components/SelectTimeframe";
import SelectSign from './components/SelectSign'
import Hororscope from "./components/Hororscope";
import Footer from './components/Footer'


function App() {

  const [selectedSign, setSelectedSign] = useState(null)
  const [selectedTimeframe, setSelectedTimeframe] = useState(null)
  
  const restart = () => {
    setSelectedSign(null)
    setSelectedTimeframe(null)
  }

  return (
    <div className="container">
      
      {!selectedSign && !selectedTimeframe && (<h1>Hororscope App</h1>)}

      {!selectedSign && (
      <SelectSign onSignselected={setSelectedSign}></SelectSign>)}
      
      {selectedSign && !selectedTimeframe && (<SelectTimeframe 
      onTimeframeSelected={setSelectedTimeframe}></SelectTimeframe>)}
      
      {selectedSign && selectedTimeframe && 
      <Hororscope 
      sign={selectedSign} 
      timeframe={selectedTimeframe}/>}

      {selectedSign && (<button className='btn'style={{background: 'purple'}}onClick={restart}>Restart</button>)}

      {!selectedSign && !selectedTimeframe && (<Footer></Footer>)} 

    </div>
  );
}

export default App;
