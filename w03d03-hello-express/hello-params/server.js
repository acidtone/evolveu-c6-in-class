const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send("Hello World!");
})

app.get('/forest', function(request, response) {
  const daylight = request.query.daylight;

  // console.log(true == daylight)
  if (daylight === 'true') {
    response.send(`You are in a deep, dimly lit wood... you see a <a href='/meadow'>Meadow</a>`);
  } else {
    response.send("You are in a deep, dark wood...")
  }
})

app.get('/meadow', (request, response) => {
  response.send("You're now very wet. Should have stopped at the shore.");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})