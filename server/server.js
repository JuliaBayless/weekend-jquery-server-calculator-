const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

//needed for GET and POST routes
app.use(bodyParser.urlencoded({ extended: true }));
// to GET static files (HTML, CSS, CLIENT JS)
app.use(express.static('server/public'));

//node path to grab array from mathHistory file
let mathHistory = require('./modules/mathHistoryArray');
console.log(mathHistory);

//APP and POST routes
app.get('/mathHistory', (req, res) => {
    res.send(mathHistory);
})
//push post data into mathHistory
app.post('/mathHistory', (req, res) => {
    let mathProblems = req.body;
    mathHistory.push(mathProblems);
    console.log('pushed into mathHistory array', mathHistory);
    res.sendStatus(201);
})

//listen cue
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})