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
let totalValue = 0
// let calculator = require('./modules/calculator');
// let valueArray = require('./modules/value')

function calculator() {
    if (mathProblems.op === '+') {
        totalValue = mathProblem.firstValue + mathProblem.secondValue
        return totalValue
    } else if (mathProblems.op === '-') {
        totalValue = mathProblem.firstValue - mathProblem.secondValue
        return totalValue
    } else if (mathProblems.op === '*') {
        totalValue = mathProblem.firstValue * mathProblem.secondValue
        return totalValue
    } else if (mathProblems.operator === '/') {
        totalValue = mathProblem.firstValue / mathProblem.secondValue
        return totalValue
    }
}

console.log(totalValue);



//APP and POST routes
app.get('/mathHistory', (req, res) => {
    res.send(mathHistory);
})

//push post data into mathHistory
app.post('/mathHistory', (req, res) => {
    let mathProblems = req.body;
    mathHistory.push(mathProblems);
    calculator(mathProblems);
    console.log('pushed into mathHistory array', mathHistory);
    res.sendStatus(201);
})

app.get('/totalValue', (req, res) => {
    res.send(totalValue);
})

//push post data into mathHistory
// app.post('/totalValue', (req, res) => {
//     let value = req.body;
//     mathHistory.push(mathProblems);
//     calculator(mathProblems);
//     console.log('pushed into mathHistory array', mathHistory);
//     res.sendStatus(201);
// })



//listen cue
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})