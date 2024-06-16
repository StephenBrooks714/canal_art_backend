const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Users = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

Users.pre("save", function(next) {
    if (this.isModified("password")) {
        bcrypt.hash(this.password, saltRounds, (err, hash) => {
            if (err) {
                next(err);
            } else {
                this.password = hash;
                next();
            }
        });
    } else {
        next();
    }
});
module.exports = mongoose.model("users", Users)