import React from 'react';

function BotArmy({ botArmy, removeFromArmy, deleteBot }) {
    console.log('BotArmy props:', botArmy); // Check the received botArmy here
  if (!botArmy || botArmy.length === 0) {
    return <div>No bots enlisted in the army yet!</div>;
  }

  return (
    <div className="YourBotArmy">
      <h2>Your Bot Army</h2>
      {botArmy.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          <button onClick={() => removeFromArmy(bot.id)}>Release</button>
          <button onClick={() => deleteBot(bot.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default BotArmy;