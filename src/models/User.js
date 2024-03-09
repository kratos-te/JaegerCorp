
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    wallet : {  
        type : String, 
        required: [true, 'Please add a wallet key'],
        unique: true,
        trim: true,
        maxlength: [50, 'Wallet key cannot be more than 50 characters']
    },
    twitterName : {
        type : String
    },
    twitterImageURI : {
        type : String
    },
    twitterEmail : {
        type : String
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);