const express = require('express');
const { 
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode, 
} = require('http-status-codes');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'server on' })
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));