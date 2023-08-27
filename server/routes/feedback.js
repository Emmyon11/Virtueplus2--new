const express = require('express');
const { getFeedbacks, addFeedback } = require('../controller/feedback');
const router = express.Router();

router.get('/get-feedbacks', getFeedbacks);
router.post('/add-feedback', addFeedback);

module.exports = router;