const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  subjects: [
    {
      subjectName: String,
      marks: Number
    }
  ],
  totalMarks: {
    type: Number,
    required: true
  },
  status: {
    type: String, // PASS / FAIL
    required: true
  }
});

module.exports = mongoose.model('Result', ResultSchema);
