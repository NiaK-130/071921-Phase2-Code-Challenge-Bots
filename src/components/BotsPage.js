import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const botsAPI = "http://localhost:8002/bots";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [addbot, setaddBot] = useState(0);


 

  useEffect(() => {
    fetch(botsAPI)
    .then((res) => res.json())
    .then((json) => setBots(json));
  }, []);


  function addArmyClick(){
    setaddBot()
    
  }

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots = {bots} 
      addtoArmy = {addArmyClick}/>
    </div>
  )
}

export default BotsPage;
