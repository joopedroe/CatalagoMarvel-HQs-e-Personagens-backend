const model = require('mongoose');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const CharacterSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    imageURL: {
      type: String,
      required: true,
    },
    type_image: {
      type: String,
      required: true,
    },
    id_user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Character', CharacterSchema);
