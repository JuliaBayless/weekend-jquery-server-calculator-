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
let totalValue = 0;
// let calculator = require('./modules/calculator');

//server side calculator
function calculator(math) {

    switch (math.op) {
        case '+':
            math.totalValue = Number(math.firstValue) + Number(math.secondValue)
            break;
        case '-':
            math.totalValue = math.firstValue - math.secondValue
            break;
        case '*':
            math.totalValue = math.firstValue * math.secondValue
            break;
        case '/':
            math.totalValue = math.firstValue / math.secondValue
            break;
        default:
            alert('Calculator error')
            break;
    }
    mathHistory.push(math);
}

console.log(totalValue);


//APP and POST routes
app.get('/mathHistory', (req, res) => {
    res.send(mathHistory);
})

//push post data into mathHistory
app.post('/mathHistory', (req, res) => {
    calculator(req.body);
    res.sendStatus(201);
})

console.log(totalValue);

//listen cue
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})