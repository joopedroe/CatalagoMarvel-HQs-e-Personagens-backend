const model = require('mongoose');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const ComicSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
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

module.exports = mongoose.model('Comic', ComicSchema);
