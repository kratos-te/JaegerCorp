
const mongoose = require('mongoose');

const RaidSchema = new mongoose.Schema({
    name : {  
        type : String, 
        required: [true, 'Please add a name'],
        // unique: true,
        trim: true,
        // maxlength: [50, 'Wallet key cannot be more than 50 characters']
    },
    discordID : {
        type : String
    },
    raiderNumber : {
        type : Number
    },
    requirement : [{
        type : String
    }],
    raidURL : {
        type : String
    },
    creater : {
        type : String,
        required : [true, 'Please add a creater public key']
    },
    member : [{
        type : String
    }]
})

module.exports = mongoose.models.Raid || mongoose.model('Raid', RaidSchema);