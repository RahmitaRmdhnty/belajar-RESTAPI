const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
},  {
    collection: 'contents',
    timestamps: true, //agar pada saat document(rows) diinputkan juga terdapat waktunya
});

module.exports = mongoose.model('Contents', schema);