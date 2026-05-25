import CoachingQueue from './models/CoachingQueue.mjs';
import User from './models/User.mjs';
import express from 'express';

// Build the Express instance
const app = express();
app.use(express.json());
const port = 3000;

const coachingQueue = new CoachingQueue(5);

app.post('/addUser', 
  (req, res) => {
    // in the future, let's get "proper validation" here.
    console.log(req.body);

    // this is NOT working, this is the current work in progress (AndyG 5/25)
    const newUser = new User(req.body.name, req.body.id);
    const result = coachingQueue.add(newUser);
    res.send(result);
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});