const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
    {
        //TODO Use Mongoose's ObjectId data type
        // Default value is set to a new ObjectId 
        reactionId: {
            type: ObjectId,
            default: Date.now,
        },
        //TODO look up how to setup a getter method
        createdAt: {
            type: Date,
            default: Date.now,
        },

        username: {
            type: String,
            required: true,
        },
        //TODO Look up how to do this, Array of nested documents created with the reactionSchema
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
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
