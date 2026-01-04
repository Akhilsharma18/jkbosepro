const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  pdfUrl: {
    type: String, // In a real app this would be a file path/URL, here we might simulate or just use links
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isNew: {
    type: Boolean, // To show "New" badge
    default: true
  }
});

module.exports = mongoose.model('Notification', NotificationSchema);
