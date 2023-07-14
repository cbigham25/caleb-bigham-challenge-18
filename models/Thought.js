const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        //TODO look up how to setup the properties for the model. 
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
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
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    })
    //TODO see if I need to setup a setter
    // Setter to set the first and last name
    .set(function () {

    });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
