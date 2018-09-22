const express = require('express');
const router = express.Router();
const model = require('../db')

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/api/makeTeacher/:username/:first/:last', async (req, res) => {
  let teacher = await model.teacher.create({
    username: req.params.username,
    firstName: req.params.first,
    lastName: req.params.last
  })
  res.json(teacher)
})

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

router.get('/api/layouts', async (req, res) =>{
  let layouts = await model.layout.findAll({
    where: {teacherId: req.query.teacher_id}
  })
  res.json(layouts)
})

router.post('/api/layouts', async (req, res) => {
  let newLayout = await model.layout.create({
    name: req.body.name,
    teacherId: req.body.teacherId
  })
  res.json(newLayout)
})

router.post('/api/students', async (req, res) => {
  const student = req.body
  let newStudent = await model.student.create(student)
  res.json(newStudent)
})

router.get('/api/students', async (req, res) => {
  const students = await model.student.findAll()
  res.json(students || [])
})

router.get('/api/student/:id/name', async (req, res) => {
  const student = await model.student.findOne({
    id: req.params.id
  })
  res.json({
    firstName: student.firstName,
    lastName: student.lastName
  })
})

router.post('/api/student/:id/login', async (req, res) => {
  const student = await model.student.findOne({
    id: req.params.id
  })
  if (student.birthdDate === req.body.birthDate) {
    resp.json({token: 'abcdefg'})
  }
  res.json({
    firstName: student.firstName,
    lastName: student.lastName
  })
})

module.exports = router;