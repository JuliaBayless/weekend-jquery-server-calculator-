$(readyNow);
let operator = ''
let mathProblem = {
    firstValue: $(`#firstValue`).val(),
    secondValue: $(`#secondValue`).val(),
    op: operator,
}



function readyNow() {
    console.log('JQ locked and loaded!');
    $(`.selectorBtn`).on(`click`, selector)
}


function selector() {
    console.log('In selector function', $(this).html());
    operator = $(this).html()
    return operator
}

console.log(mathProblem.selector);

//function sending data to server
function getServerData() {
    $.ajax({
        type: 'GET',
        url: '/mathHistory'
    }).then(function (response) {
        console.log('SUCCESSFUL GET', response);
        //render goes here  <------------------
    }).catch(function (response) {
        alert('I\'m broken :( cannot GET mathHistory');
    })
} //end getServerData 'GET'

//function to post inputs to server.
function postToServer() {
    $.ajax({
        type: 'POST',
        url: '/mathHistory',
        data: {mathProblem: mathProblem}     //need to add input handle here
    }).then(function (response) {
        console.log('SUCCESSFUL POST', response);
        //getServerData function here
        //empty input function here!
    }).catch(function (response) {
        alert('I\'m broken, cannot POST mathProblem to server')
    })
} //end postToServer 'POST'