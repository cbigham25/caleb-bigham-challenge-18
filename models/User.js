const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    //TODO make sure to match valid email type
    email: {
      type: String,
      required: true,
      unique: true,
    },
    //TODO check to make sure the "thought" and "user" is used correclty here
    //TODO need to see how to implement the Unique, Required, and Trimmed properties
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    // TODO Create a virtual called friendCount 
    // that retrieves the length of the user's friends array field on query.
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends;
  })
  //TODO see if I need to setup a setter
  // Setter to set the first and last name
  .set(function () {

  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
