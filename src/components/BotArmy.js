import React from 'react';

function BotArmy({ botArmy, removeFromArmy, deleteBot }) {
  if (!botArmy || botArmy.length === 0) {
    return <div className="YourBotArmy">No bots enlisted in the army yet!</div>;
  }

  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  };
  const botChunks = chunkArray(botArmy, 20);

  return (
    <div className="YourBotArmy">
      <h2>Your Bot Army</h2>
      <div className="botArmyContainer">
        {botChunks.map((chunk, rowIndex) => (
          <div className="botRow" key={rowIndex}>
            {chunk.map((bot) => (
              <div className="BotCard" key={bot.id}>
                <h3>{bot.name}</h3>
                <img src={bot.avatar_url} alt={bot.name} />
                <button onClick={() => removeFromArmy(bot.id)}>Release</button>
                <button onClick={() => deleteBot(bot.id)}>x</button>
              </div>
            ))}
          
            {Array.from({ length: 20 - chunk.length }).map((_, index) => (
              <div className="BotCard empty" key={`empty-${index}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotArmy;
