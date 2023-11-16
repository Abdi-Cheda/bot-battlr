const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Example data (replace this with your actual data source)
const bots = [
  { id: 1, name: 'Bot 1' },
  { id: 2, name: 'Bot 2' },
  // Add more bot objects as needed
];

app.get('/bots', (req, res) => {
  res.json(bots);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
