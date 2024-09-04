const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('ok world');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
