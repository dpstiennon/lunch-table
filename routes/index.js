const express = require('express');
const router = express.Router();

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

module.exports = router;