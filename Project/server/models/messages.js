const db = require('../database');

class Messages {
    static retrieveALL (callback) {
        //Change name of database here if necessary
        db.query('SELECT messages_text from messages4', (err, res) => {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }

    static insert (message, callback) {
        //Change name of database here if necessary
        const words = ['shit', 'fuck', 'bitch', 'hell', 'bastard', 'dick'];
        
        if (words.includes(message.toString())) {
            return;
        }
         
        db.query('INSERT INTO messages4 (messages_text) VALUES ($1)', [message], (err, res) => {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Messages;
