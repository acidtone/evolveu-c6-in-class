const mongoose = require('mongoose');
const mongoUser = 'dbReadOnlyUser';
const mongoPasswd = 'jelly1234';
const mongoDBName = 'MERN-STARTER-DB';
const mongoServer = 'cluster0.vvqav.mongodb.net';
const url =
  `mongodb+srv://${mongoUser}:${mongoPasswd}` +
  `@${mongoServer}/${mongoDBName}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', (_) =>
  console.log('MongoDB is now connected:', `${mongoUser}@${mongoServer}/${mongoDBName}`)
);
db.on('error', (err) => console.error('MongoDB connection error!', err));
