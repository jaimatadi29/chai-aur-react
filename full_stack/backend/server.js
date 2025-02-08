import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('server is Ready !!!!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            content: 'This is my first Joke'
        },
        {
            id: 1,
            title: 'Second Joke',
            content: 'This is my second Joke'
        },
        {
            id: 1,
            title: 'Third Joke',
            content: 'This is my Third Joke'
        },
        {
            id: 1,
            title: 'Forth Joke',
            content: 'This is my Forth Joke'
        },
        {
            id: 1,
            title: 'Fifth Joke',
            content: 'This is my Fifth Joke'
        },
        {
            id: 1,
            title: 'Sixth Joke',
            content: 'This is my Sixth Joke'
        },
    ]
    res.send(jokes);

})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    
})