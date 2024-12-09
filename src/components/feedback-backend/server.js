import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your MongoDB Atlas connection string
const MONGO_URI = 'mongodb+srv://ved221473101:C5FPlkqRbrkwbFJ0@cluster1.rdkr2.mongodb.net/mydatabase';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('MongoDB Atlas connection error:', err));

const feedbackSchema = new mongoose.Schema({
  message: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/feedback', async (req, res) => {
  const { message } = req.body;
  const feedback = new Feedback({ message });

  try {
    await feedback.save();
    res.status(201).send('Feedback submitted successfully');
  } catch (error) {
    res.status(500).send('Error saving feedback');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
