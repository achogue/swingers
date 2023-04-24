const { Schema, model, Types } = require('mongoose');

// sets the user schema
const userSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid email address"],
    },
	password: {
		type: String,
		required: true,
		unique: false,
		trim: true
	},
	handicap: {
		type: String,
		required: true,
		unique: false,
		trim: true
	},
	motorPreference: {
		type: String,
		required: true,
		unique: false,
	},
	smoke: {
		type: String,
		required: true,
		unique: false,
	},
	buddyMotorPreference: {
		type: String,
		required: true,
		unique: false,
	},
	buddySmokingPreference: {
		type: String,
		required: true,
		unique: false,
	},
    buddies: [
        {
        type: Schema.Types.ObjectId,
        ref: "User",
        },
    ],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

userSchema.virtual("buddyCount").get(function () {
    return this.buddies.length;
});

const User = model('User', userSchema);
module.exports = User;