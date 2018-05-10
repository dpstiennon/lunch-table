const express = require('express');
const router = express.Router();
const model = require('../db')

// Do work here
router.get('/', (req, res) => {
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

router.post('/api/login', async(req, res) => {
  let teacher = await model.teacher.findOne({
    where: {username: req.body.username}
  })
  res.json(teacher)
})

router.post('/api/layouts', async (req, res) => {
  model.layout.create({
    name: req.body.name,
    teacherId: req.body.teacherId
  }).then(created => {
    res.json(created)
  })
})

module.exports = router;