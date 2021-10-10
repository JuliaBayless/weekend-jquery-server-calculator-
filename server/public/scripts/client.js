$(readyNow);

//math operator variable to be sent in .op
let operator = ''

function readyNow() {
    console.log('JQ locked and loaded!');
    $(`.selectorBtn`).on(`click`, selector)
    $(`#clearBtn`).on(`click`, emptyInputs)
    $(`#submitBtn`).on(`click`, postToServer)
} //end readyNow

//function to select math operator
function selector() {
    console.log('In selector function:', $(this).html());
    operator = $(this).html()
    return operator
} //end selector function

//function sending data to server
function getServerData() {
    $.ajax({
        type: 'GET',
        url: '/mathHistory'
    }).then(function (response) {
        console.log('SUCCESSFUL GET', response);
        renderToDOM(response);
    }).catch(function (response) {
        alert('I\'m broken :( cannot GET mathHistory');
    })
} //end getServerData 'GET'

//function to post inputs to server.
function postToServer() {
    $.ajax({
        type: 'POST',
        url: '/mathHistory',
        data: {
            firstValue: $(`#firstValue`).val(),
            secondValue: $(`#secondValue`).val(),
            op: operator,
        }   
    }).then(function (response) {
        console.log('SUCCESSFUL POST', response);
        getServerData();
        emptyInputs();
    }).catch(function (response) {
        alert('I\'m broken, cannot POST mathProblem to server')
    })
} //end postToServer 'POST'

//empty inputs for clear button and submit button
function emptyInputs() {
    $(`#firstValue`).val('');
    $(`#secondValue`).val('');
} //end emptyInputs

//render to DOM
function renderToDOM(mathProblems) {
   //empty DOM
    $(`ul`).empty();

    //start loop
    for ( let problem of mathProblems) {
        $(`#answer`).text(problem.totalValue)
        $(`ul`).append(`
        <li>${problem.firstValue} ${problem.op} ${problem.secondValue} = ${problem.totalValue}</li>
        `)
    } //end loop

} //end render function 