import mongoose from 'mongoose';

const chatMessageSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      default: 'default',
    },
    userQuestion: {
      type: String,
      required: true,
      trim: true,
    },
    aiResponse: {
      type: String,
      required: true,
    },
    suggestedTopics: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('ChatMessage', chatMessageSchema);
