const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const bots = [
  { id: 1, name: 'Bot 1' },
  { id: 2, name: 'Bot 2' },
];

app.get('/bots', (req, res) => {
  res.json(bots);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
