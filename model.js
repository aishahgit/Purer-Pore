const mongoose = require('mongoose');


const regSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        unique: true,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    cpassword : {
        type: String,
        required: true,
    },
    tokens:[{
        token:{
            type: String,
            required: true,
        }

    }]
});



const regCollection = mongoose.model('regcollection', regSchema);

module.exports = regCollection;