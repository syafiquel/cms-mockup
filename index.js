const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/individual', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'individual.html'));
});

app.get('/company', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'company.html'));
});

app.get('/competency', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'competency.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
