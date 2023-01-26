import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { useEffect, useState } from 'react';
function App() {

//states 
const [bots, setBots] = useState([]);
const [botArmy, setBotArmy] = useState([]);


//useEffect
useEffect(()=>{
  fetch(`http://localhost:8000/bots`)
  .then(res => res.json())
  .then(bots => setBots(bots))
},[])

// add bot to yourBotArmy component
const addBot = (bot) => {
  if(!botArmy.includes(bot)){
    setBotArmy([...botArmy,bot])
  }
}

//remove bot from yourBotArmy component
const removeBot = (bot) =>{
  setBotArmy(botArmy.filter((botArmy)=> botArmy.id !== bot.id))
}
  return (
   <div className="bot--container">
      <div className='bot-army-collection'>
      <h3>My bot Army</h3>
      <YourBotArmy bots = {botArmy} removeBot={removeBot}/>
      </div>
    
    <div className='bot-list'>
    <h3>Bot Collection</h3>list
     <BotCollection bots= {bots} botFunction = {addBot}/>
    </div>
    
    </div>
  );
}

export default App;
