const express = require('express');
const app = express();
const videos = require('./db.json');

app.use(express.static('public'));

app.get('/videos', (req, res) => {
    res.json(videos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
