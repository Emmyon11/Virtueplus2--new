const feedbackModel = require('../models/feedback');

const getFeedbacks = async (req, res) => {
  try {
    const data = await feedbackModel.find({});
    if (data) {
      return res.json({ data });
    }
  } catch (error) {
    console.log(error);
  }
};

const addFeedback = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !message) {
    res.json({ msg: 'name and email must be provided' });
  } else {
    try {
      let newFeedback = new feedbackModel({
        name,
        email,
        message,
      });
      let save = await newFeedback.save();
      if (save) {
        return res.json({ sucess: 'Feedback submitted successfully' });
      }
    } catch (error) {
      return res.json({ error: error });
    }
  }
};

module.exports = {
  getFeedbacks,
  addFeedback,
};
