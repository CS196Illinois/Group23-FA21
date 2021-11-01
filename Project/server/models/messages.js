const db = require('../database');

class Messages {
    static retrieveALL (callback) {
        db.query('SELECT message_text from messages', function (err, res) {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }

    static insert (message, callback) {
        db.query('INSERT INTO messages (message_text) VALUES ($1)', [message], function (err, res) {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Messages;