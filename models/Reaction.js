const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => timeSince(date),
        },
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
reactionSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    })
    //TODO see if I need to setup a setter
    // Setter to set the first and last name
    .set(function () {

    });

// Initialize our reaction model
const Thought = model('reaction', reactionSchema);

module.exports = Thought;
