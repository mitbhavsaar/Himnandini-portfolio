import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    detailedOverview: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'Odoo Solutions',
    },
    featured: {
      type: Boolean,
      default: true,
    },
    metrics: [
      {
        label: String,
        value: String,
      },
    ],
    githubUrl: {
      type: String,
      default: 'https://github.com/sharmahimnandini',
    },
    demoUrl: {
      type: String,
      default: '#',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
