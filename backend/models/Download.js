const mongoose = require('mongoose');

const DownloadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Date Sheet', 'Syllabus', 'Forms', 'Circulars'],
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Download', DownloadSchema);
