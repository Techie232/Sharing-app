const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

   routeParam: {
      type: String,
      unique: true,
      required: true,
      trim: true,
   },
   content: {
      type: String,
      required: true,
      trim: true,
   },
   expiresAt: {
      type: Date,
      expires: 0,
   }
},
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('Post', postSchema);
