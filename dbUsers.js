const mongoose = require('mongoose')

/*           SETTING UP FORMAT FOR DATABASE                 */
const userSchema = mongoose.Schema({
    id: String,
    imgUrl: String,
    userName: String,
    userLastName: String,
    age: Number,
    joined: Number
})

export default mongoose.model('users', userSchema)