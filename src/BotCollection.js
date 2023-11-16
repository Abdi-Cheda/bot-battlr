import React, { useEffect, useState } from 'react';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Change 'https' to 'http'
fetch('http://localhost:3000/bots')
.then(response => response.json())
.then(data => setBots(data))
.catch(error => console.error('Error fetching data:', error));

  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      {bots.map(bot => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          {/* Render other bot details */}
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
