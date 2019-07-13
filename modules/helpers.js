const crypto = require('crypto');

exports.encrypt = (password, salt) => 
    crypto
        .createHmac('sha256', salt) //sha256 adalah salah satu cara atau metode enkripsi
        .update(password)
        .digest('hex');

