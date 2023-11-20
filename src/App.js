import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [BotArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!BotArmy.find((b) => b.id === bot.id)) {
      setBotArmy([...BotArmy, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    const updatedArmy = BotArmy.filter((bot) => bot.id !== botId);
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
      <BotCollection bots={bots} addToArmy={addToArmy} />
      <BotArmy BotArmy={BotArmy} removeFromArmy={removeFromArmy} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
