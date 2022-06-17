const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [ isEmail, 'Invalid email' ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.reduce((total, user) => total + user.friends.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;