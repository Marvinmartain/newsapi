const mongoose = require('mongoose');
const Log = require('./models/Log');

mongoose.connect('mongodb://localhost:27017/logs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Log.deleteMany({});
  })
  .then(() => {
    const logs = [
      { title: 'First log', entry: 'This is the first log entry.' },
      { title: 'Second log', entry: 'This is the second log entry.', shipIsBroken: false },
      { title: 'Third log', entry: 'This is the third log entry.' },
    ];
    return Log.insertMany(logs);
  })
  .then(() => console.log('Seed data inserted successfully'))
  .catch(err => console.error(err))
  .finally(() => mongoose.disconnect());

