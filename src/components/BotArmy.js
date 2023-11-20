import React from 'react';

function BotArmy({ BotArmy, removeFromArmy, deleteBot }) {
  return (
    <div className="BotArmy">
      <h2>Bot Army</h2>
      {BotArmy.map((bot) => (
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
