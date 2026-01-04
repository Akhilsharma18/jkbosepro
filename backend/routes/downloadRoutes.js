const express = require('express');
const router = express.Router();
const Download = require('../models/Download');
const { protect } = require('../middleware/authMiddleware');

// @route   GET /api/downloads
// @desc    Get all downloads
// @access  Public
router.get('/', async (req, res) => {
  try {
    const downloads = await Download.find().sort({ date: -1 });
    res.json(downloads);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route   POST /api/downloads
// @desc    Add a download (Admin)
// @access  Private
router.post('/', protect, async (req, res) => {
  const { title, category, fileUrl } = req.body;

  try {
    const download = new Download({
      title,
      category,
      fileUrl
    });

    const createdDownload = await download.save();
    res.status(201).json(createdDownload);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
