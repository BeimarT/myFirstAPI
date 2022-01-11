const moongose = require('mongoose');

const userSchema = moongose.Schema ({
    email: String,
    active: Boolean,
})

module.exports = moongose.model('User', userSchema);

//Hay otra forma de exportarlo todo junto