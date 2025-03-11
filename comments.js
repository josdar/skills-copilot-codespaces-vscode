// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create a new comment
app.post('/comments', function (req, res) {
    var comment = req.body.comment;
    var id = req.body.id;
    // Save the comment to the database
    fs.appendFile('comments.db', id + ': ' + comment + '\n', function (err) {
        if (err) {
            console.log(err);
        }
    });
    // Send the response
    res.send('Comment saved');
});

// Get all comments
app.get('/comments', function (req, res) {
    // Read the comments from the database
    fs.readFile('comments.db', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        // Send the response
        res.send(data);
    });
});

// Start the server
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});