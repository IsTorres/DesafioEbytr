const express = require('express');
const { 
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode, 
} = require('http-status-codes');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/api', (req, res) => {
  res.status(StatusCodes.OK).json(ReasonPhrases.OK);
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));