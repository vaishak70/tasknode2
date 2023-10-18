const express = require('express');
const jwt = require('jsonwebtoken');

const router3 = express.Router();

const authorizeRole = (role) => {
  return (req, res, next) => {
    const userRole = ('admin')
    console.log(userRole);
    if (userRole !== role) {
      return res.status(403).send(' denied');
    }
    next();
  };
};

router3.get('/admin', authorizeRole('admin'), (req, res) => {
  res.send(' route accessed');
});

router3.get('/user', authorizeRole('user'), (req, res) => {
  res.send('User route accessed');
});

module.exports = router3;

