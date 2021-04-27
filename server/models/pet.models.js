const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required"],
    minlength: [3, "Name must be at least 3 characters"]
  },
  type: {
    type: String,
    required: [true, "Type required"],
    minlength: [3, "Type must be at least 3 characters"]
  },
  description: {
    type: String,
    required: [true, "Description required"],
    minlength: [3, "Description must be at least 3 characters"]
  },
  skillOne: {
    type: String
  },
  skillTwo: {
    type: String
  },
  skillThree: {
    type: String
  },
  likes: {
    type: Number
  },
},
  {timestamps: true}
);

module.exports = mongoose.model("Pet", PetSchema);