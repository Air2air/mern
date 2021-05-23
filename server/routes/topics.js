const express = require('express');
const { requireAuth } = require('./middleware');
const { Topic } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  Topic.find({ user: req.user.id }, { __v: 0, user: 0 }, (err, topics) => {
    if (err) {
      res.status(400).send({ message: 'Get users failed', err });
    } else {
      res.send({ message: 'Topics retrieved successfully', topics });
    }
  });
});

router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newTopic = Topic(req.body);

  newTopic.save((err, savedTopic) => {
    if (err) {
      res.status(400).send({ message: 'Create topic failed', err });
    } else {
      res.send({ message: 'Topic created successfully', topic: savedTopic });
    }
  });
});

router.put('/complete', requireAuth, (req, res) => {
  Topic.findById(req.body.id, { __v: 0, user: 0 }, (err, topic) => {
    if (err) {
      res.status(400).send({ message: 'Toggle topic failed', err });
    } else {
      topic.completed = !topic.completed;
      topic.save((err, savedTopic) => {
        if (err) {
          res.status(400).send({ message: 'Toggle topic failed', err });
        } else {
          res.send({ message: 'Toggled complete topic successfully', topic: savedTopic });
        }
      });
    }
  });
});

router.put('/', requireAuth, (req, res) => {
  Topic.findById(req.body.id, { __v: 0, user: 0 }, (err, topic) => {
    if (err) {
      res.status(400).send({ message: 'Update topic failed', err });
    } else {
      topic.text = req.body.text;
      topic.updated_at = Date.now();
      topic.save((err, savedTopic) => {
        if (err) {
          res.status(400).send({ message: 'Update topic failed', err });
        } else {
          res.send({ message: 'Updated topic successfully', topic: savedTopic });
        }
      });
    }
  });
});

router.delete('/', requireAuth, (req, res) => {
  Topic.findByIdAndRemove(req.body.id, err => {
    if (err) {
      res.status(400).send({ message: 'Delete topic failed', err });
    } else {
      res.send({ message: 'Topic successfully delete' });
    }
  });
});
