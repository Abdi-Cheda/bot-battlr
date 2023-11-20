import React from 'react';

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="BotCollection">
      <h2>All Bots</h2>
      <div className="botCardContainer">
        {bots.map((bot) => (
          <div className="BotCard" key={bot.id}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <button onClick={() => addToArmy(bot)}>Add to Army</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;