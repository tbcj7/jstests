// this is not working because you cannot pass var to other function just by calling it
//
//
// function testone() {
//     var windowWidth = $(window).width();
//     console.log(windowWidth);
// }

// function testtwo() {
//     var element = 'windowWidth: ' + windowWidth ;
//     console.log(element)
// }

// $(document).ready(function(){
//     testone();
//     testtwo();
// }); // end of ready




/* ------------------------------------------- */

var NewObj = {}; // Globally scoped object
var MyApp = {}; // Globally scoped object

function testone() {
    // registering windowWidth as property of MyApp object this way it's accesible outside this function
    NewObj.windowWidth = $(window).width();
    console.log(NewObj.windowWidth);
    console.dir(NewObj); // console it to see windowWidth 'registered' on this object
    console.dir(MyApp); // console it to see: NOTHING is registered
}

function testtwo() {
    var element = 'windowWidth: ' + NewObj.windowWidth ;
    console.log(element)
}

$(document).ready(function(){
    testone();
    testtwo();
    console.log('here too: ' + NewObj.windowWidth); // window Width visible here too, due to it's registered on NewObj
}); // end of ready


// /* ------------------------------------------- */
//  var winValue = $(window).width();
// $('html').click(function(){
//     testtwo(winValue);
//     // pass the winValue to function testtwo. It will receive it as param: widthReceived
// });

//  (function(){
//     var winValue = $(window).width();
//     console.log('IIFE: ' + winValue);
//  }()); // this is an IIFE : immediatly invoced function execution.

// function testtwo(widthReceived) {
//     // widthReceived comes fom winValue passed to this function as parameter on click event
//     var element = 'windowWidth: ' + widthReceived ;
//     $('.output').html(widthReceived);
//     console.log('winValue : ' + winValue)
//     console.log('element : ' + element)
// }

// $(document).ready(function(){
//     testtwo();
// }); // end of ready
