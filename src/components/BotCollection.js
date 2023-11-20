import React from 'react';

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="BotCollection">
      <h2>All Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
