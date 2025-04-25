// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to Startup News API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
