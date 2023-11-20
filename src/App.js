import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]); // Renamed state variable to botArmy

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    console.log('Adding bot to army:', bot);
    if (!botArmy.find((b) => b.id === bot.id)) {
      console.log('Bot not found in army, adding...');
      setBotArmy((prevBotArmy) => [...prevBotArmy, bot]);
    }
  };
  

  const removeFromArmy = (botId) => {
    const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedArmy);
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedBots = bots.filter((bot) => bot.id !== botId);
        setBots(updatedBots);
        removeFromArmy(botId);
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div className="App">
      <h1>Welcome to Bot Battlr</h1>
      <div className="botArmyContainer">
    <BotArmy botArmy={botArmy} removeFromArmy={removeFromArmy} deleteBot={deleteBot} />
  </div>
  <div className="botCollectionContainer">
    <BotCollection bots={bots} addToArmy={addToArmy} />
  </div>
  </div>
  );
}

export default App;
