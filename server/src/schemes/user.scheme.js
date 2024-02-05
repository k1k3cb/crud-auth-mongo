const { mongoose } = require('mongoose');

const UserScheme = mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    active: {
      type: Boolean,
      default: false,
      required: true
    },
    image: {
      type: String,
      default: 'public/assets/images/profile.png'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

module.exports = UserScheme;
