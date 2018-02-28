const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/posts', (req, res) => {
  const posts = db.posts.findAll()
  res.json(posts)
})

router.get('/posts/:id', (req, res) => {
  const post = db.posts.find(req.params.id)
  res.json(post)
})

router.post('/posts', (req, res) => {
  const newpost = db.posts.insert({
    "author": req.body.author,
    "content": req.body.content,
    "title": req.body.title,
  })
  res.json(newpost)
})

router.delete('/posts/:id', (req, res) => {
  const post = db.posts.find(req.params.id)
  if (post) {
    db.posts.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router