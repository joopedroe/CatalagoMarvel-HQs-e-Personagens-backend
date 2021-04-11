const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');


module.exports = {
  async Autenticacao(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(402).send({ erro: 'User does not exist' });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ erro: 'Password invalid' });
    }
    user.password = undefined;

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400,
    });

    res.status(200).send({ user, token });
  },
};
