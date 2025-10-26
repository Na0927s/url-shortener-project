const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const urlDatabase = new Map();

app.post('/api/shorten', (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).send({ error: 'longUrl is required' });
  }

  const shortCode = nanoid(7);
  urlDatabase.set(shortCode, longUrl);

  res.send({ shortUrl: `http://localhost:${port}/${shortCode}` });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
