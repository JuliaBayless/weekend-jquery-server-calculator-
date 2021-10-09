$(readyNow);

function readyNow () {
    console.log('JQ locked and loaded!');
    
}

//function sending data to server
function getServerData () {
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
        data: {
            mathProblem: '' ///need to add input handle here
        }
    }).then(function (response) {
        console.log('SUCCESSFUL POST', response);
        //getServerData function here
        //empty input function here!
    }).catch(function(response) {
        alert('I\'m broken, cannot POST mathProblem to server')
    })
} //end postToServer 'POST'