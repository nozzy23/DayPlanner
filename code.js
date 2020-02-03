function SaveInformation(){
    console.log($("#nine").val());
    localStorage.setItem("9",$("#nine").val());
    localStorage.setItem("10",$("#ten").val());
    localStorage.setItem("11",$("#eleven").val());
    localStorage.setItem("12",$("#twelve").val());
    localStorage.setItem("1",$("#one").val());
    localStorage.setItem("2",$("#two").val());
    localStorage.setItem("3",$("#three").val());
    localStorage.setItem("4",$("#four").val());
    localStorage.setItem("5",$("#five").val());
}
function getInformation(){
    $("#nine").val(localStorage.getItem("9"));
    $("#ten").val(localStorage.getItem("10"));
    $("#eleven").val(localStorage.getItem("11"));
    $("#twelve").val(localStorage.getItem("12"));
    $("#one").val(localStorage.getItem("1"));
    $("#two").val(localStorage.getItem("2"));
    $("#three").val(localStorage.getItem("3"));
    $("#four").val(localStorage.getItem("4"));
    $("#five").val(localStorage.getItem("5"));
}

var dateTime = null,
    date = null;

var update = function() {
    date = moment(new Date())
    dateTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function(){
    dateTime= $("#currentDay")
    update();
    setInterval(update, 1000);
});


/* 
Building our app should involve in 
1, Making 8 rows from 9:00 AM - 5:00 PM
2, display the date on the top.
3, In each column they will add any text.
4, Once the text has been complete the client will press the save button. (This action will save the text into local storage.)
5, Depending on the time of the day the rows will change different colors 
Thing that have been completed 
added moment JS library.
rows and collums have been added
text input has been added 
time on the top has been added
local storage has been added

*/
