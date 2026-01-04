const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/results
// @desc    Upload a result (Admin)
// @access  Private
router.post('/', protect, async (req, res) => {
  const { rollNo, name, class: className, subjects, totalMarks, status } = req.body;

  try {
    const resultExists = await Result.findOne({ rollNo });

    if (resultExists) {
      return res.status(400).json({ message: 'Result already exists for this Roll No' });
    }

    const result = new Result({
      rollNo,
      name,
      class: className,
      subjects,
      totalMarks,
      status
    });

    const createdResult = await result.save();
    res.status(201).json(createdResult);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   GET /api/results/:rollNo
// @desc    Get result by roll no
// @access  Public
router.get('/:rollNo', async (req, res) => {
  try {
    const result = await Result.findOne({ rollNo: req.params.rollNo });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'Result not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
