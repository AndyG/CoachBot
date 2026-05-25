import CoachingQueue from './models/CoachingQueue.mjs';
import User from './models/User.mjs';
import express from 'express';

const app = express();            // Create an express instance
const port = 3000;                // Define the port number

const coachingQueue = new CoachingQueue(5);

// Define a basic GET route
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send a response
});

app.post('/test', (req, res) => {
    const newUser = new User('Alice', "alice-id");
    coachingQueue.add(newUser);
    console.log(`created user: ${newUser.printInfo()}`);
    res.send('got test post2');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});