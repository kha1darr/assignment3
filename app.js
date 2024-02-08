const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // При необходимости измените порт

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the homepage route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set up the route for script.js
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'script.js'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
