import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
 

app.get('/api', (req, res) => {
    res.send('Server is working!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "The Programmer",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "The Developer",
            content: "Why did the developer go broke? Because he used up all his cache!"
        },
        {
            id: 3,
            title: "The Developer",
            content: "Why did the developer go broke? Because he used up all his cache!"
        },
        {
            id: 4,
            title: "The Developer",
            content: "Why did the developer go broke? Because he used up all his cache!"
        },
        {
            id: 5,
            title: "The Developer",
            content: "Why did the developer go broke? Because he used   "
        }
    ];

    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
 
 