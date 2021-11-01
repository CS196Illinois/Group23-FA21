var express = require('express');
var Messages = require('../models/messages');

var router = express.Router();

router.get('/', function (req, res) {
    Messages.retrieveAll(function (err, cities) {
        if (err)
            return res.json(err);
        return res.json(messages);
    });
});

router.post('/', function (req, res) {
    var message = req.body.message;

    Messages.insert(message, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;