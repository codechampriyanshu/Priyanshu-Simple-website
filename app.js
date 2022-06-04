const express = require('express');
const app = express(); //app name ka application create huwa h jisko use kr skte h
const path = require('path');

// app.get(route , callback)

app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/about',(req, res)=> {
    res.sendFile(path.join(__dirname, '/about.html'));
});
app.get('/queries',(req, res)=> {
    res.sendFile(path.join(__dirname, '/queries.html'));
});
app.get('/images',(req, res)=> {
    res.sendFile(path.join(__dirname, '/images.html'));
});
app.get('/contact',(req, res)=> {
    res.sendFile(path.join(__dirname, '/contact.html'));
});

// app.listen(port ,callback)
app.listen(8000, () => {
    console.log("listening to port 8000");
});
