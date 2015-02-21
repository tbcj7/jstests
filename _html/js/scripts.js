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

var MyApp = {}; // Globally scoped object

function testone() {
    // registering windowWidth as property of MyApp object this way it's accesible outside this function
    MyApp.windowWidth = $(window).width();
    console.log(MyApp.windowWidth);
}

function testtwo() {
    var element = 'windowWidth: ' + MyApp.windowWidth ;
    console.log(element)
}

$(document).ready(function(){
    testone();
    testtwo();
}); // end of ready