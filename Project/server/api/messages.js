var express = require('express');
var Messages = require('../models/messages');

var router = express.Router();

router.get('/', (req, res) => {
    Messages.retrieveALL((err, message) => {
        if (err)
            return res.json(err);
        return res.json(message);
    });
});

router.post('/', (req, res) => {
    var message = req.body.message;

    Messages.insert(message, (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;