const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  text: { type: String },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now, immutable: true },
  updated_at: { type: Date },
}, { versionKey: false });

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
