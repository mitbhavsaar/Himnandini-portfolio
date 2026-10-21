import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    author: {
      type: String,
      default: 'Himnandini Sharma',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Blog', blogSchema);
