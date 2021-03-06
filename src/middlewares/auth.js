const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ error: 'Token não informado' });

  const parts = authHeader.split(' ');

  if (!parts.length === 2)
    return res.status(401).send({ error: 'Token error' });

  const [des, token] = parts;

  if (!/^Bearer$/i.test(des))
    return res.status(401).send({ error: 'Token error formato' });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalido' });

    req.userId = decoded.id;
    return next();
  });
};
