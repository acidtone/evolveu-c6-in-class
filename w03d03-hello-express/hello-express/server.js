const express = require('express');
const app = express();

const chest = {
  treasure: [
    'coins',
    'gem',
    'enchanted sword'
  ]
}

app.get('/', (request, response) => {
  response.send("Hello World!");
})


app.get('/forest', function(request, response) {
  response.send("You are in a deep, dark wood...")
})

app.get('/vault', function(request, response){
  response.send({
    trophies: [
      'rusty dagger',
      'cursed peanut'
    ]
  })
})

app.get('/chest', function(request, response) {
  response.send(chest)
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})