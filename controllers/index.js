const jwt = require('jsonwebtoken');

exports.helloWorld = (req, res) => {
    res.send('Hello World');
};

exports.generateToken = (req, res) => {
    const token = jwt.sign({ user: 'testUser' }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ token });
};

exports.postBody = (req, res) => {
    res.send('I am post body');
};
