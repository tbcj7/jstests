// Globally scoped object
var MyApp = {};

function testone() {
    // registering windowWidth as property of MyApp this way it's accesible outside this function
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

/* ------------------------------------------- */