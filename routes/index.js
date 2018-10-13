const express = require('express');
const router = express.Router();
const model = require('../models')
const uuidv4 = require('uuid/v4');

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
  let newStudent = await model.students.create(student)
  res.json(newStudent)
})

// TODO:  remove birthdate if not logged in
router.get('/api/students', async (req, res) => {
  const students = await model.students.findAll()
  res.json(students || [])
})

router.get('/api/student/:id/name', async (req, res) => {
  const student = await model.students.findOne({
    where: {id: req.params.id}
  })
  res.json({
    firstName: student.firstName,
    lastName: student.lastName,
    id: student.id
  })
})

router.post('/api/student/:id/login', async (req, res) => {
  const student = await model.students.findOne({
    where: {id: req.params.id}
  })
  if (student.lunchCode === req.body.lunchCode) {
    const token = await model.studentTokens.create({
      studentId: student.id,
      token: uuidv4()
    })
    res.json({token: token.token})
  } else {
    res.send(401)
  }

})

router.post('/api/student/:id/friends', async (req, res) => {
  const student = await model.students.findOne({
    where: {id: req.params.id},
    include: [{
      model: model.studentTokens
    },
      {
        model: model.friends
      }]
  })
  const submittedToken = req.body.token
  const dbToken = student.studentTokens.find(t => t.token === submittedToken)
  if (dbToken && !tokenExpired(dbToken)) {
    await createFriends(student, req.body.friendIds)
    res.send(200)
  } else {
    res.send(401)
  }
})

async function createFriends(student, friendIds) {
  student.removeFriends(student.friends)
  await student.save()
  let promises = friendIds.filter(Boolean).map((id) => {
    return model.friends.create({
      studentId: student.id,
      friendId: id
    })
  })
  return Promise.all(promises)
}

function tokenExpired(token) {
  const ticksInDay = 1000 * 60 * 60 * 24
  const diff =  new Date() - token.createdAt
  return diff > ticksInDay
}

module.exports = router;
