const express = require('express');
const router = express.Router();
const db = require('../db/dbConfig')

// Do work here
router.get('/', (req, res) => {
  console.log('Its in here')
  res.send('Hey! It works!');
});

router.get('/api/teacher/:id', (req, res) => {
  res.json({
    layouts: [
      {
        name: '5th grade class',
        id: '123'
      },
      {
        name: '6th grade class',
        id: '456'
      },
      {
        name: 'The ones who always misbehave',
        id: '789'
      },
    ]
  })
})

router.get('/api/things', async (req, res) => {
  db.Layout.create({
    name: 'Dude Dudesworth'
  }).then(created => {
    res.json(created)
  })
})

module.exports = router;