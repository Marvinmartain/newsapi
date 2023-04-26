const express = require('express');
const router = express.Router();
const Log = require('./models/logs');
const Index = require('.');

// Index route
router.get('/', (req, res) => {
  Log.find({})
    .then(logs => {
      res.render('Index', { logs });
    })
    .catch(err => console.error(err));
});

module.exports = router;
