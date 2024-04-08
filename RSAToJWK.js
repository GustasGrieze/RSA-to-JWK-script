const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('private.key', 'utf8');
const token = jwt.sign({ hasInvitation: true }, privateKey, {
  algorithm: 'RS256',
  expiresIn: '1h',
  header: {
    jku: 'localhost:1337',
    kid: 'custom-key-identifier'
  }
});
console.log(token);