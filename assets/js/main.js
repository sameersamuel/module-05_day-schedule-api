
//this function translates the JS into JQuery
$(document).ready(function () {

//pulling the date from Moment
$("#currentDay").text(moment().format("MMM DD, YYYY"));

//gives functionality to the save buttons
$(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".decription").val();
    console.log(activity);
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, activity);
})

//Past events should be Grey
//Present events should be Red
//Future events should be Green
function colorRow(){

    var currentTime = moment().hours();
    console.log(currentTime);

    $(".time-block").each(function(){

        var rowTime = parseInt($(this).attr("id"));
        console.log(rowTime);
        //if the time is in the row is in the past it turns Grey.
        if (rowTime < currentTime) {
            $(this).addClass("past");
        } else if (rowTime === currentTime){ // row in the present time should be Red
            $(this).removeClass("past");
            $(this).addClass("present");
        } else { //rows that are later than the present time should be Green
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });

};
colorRow();

// setInterval(colorRow, 15000); // <-- I don't think i could get this to work

//reload from localStorage so that even if you refresh the brower you don't lose events in the schedule
$("#0 .decription").val(localStorage.getItem("0"));
$("#1 .decription").val(localStorage.getItem("1"));
$("#2 .decription").val(localStorage.getItem("2"));
$("#3 .decription").val(localStorage.getItem("3"));
$("#4 .decription").val(localStorage.getItem("4"));
$("#5 .decription").val(localStorage.getItem("5"));
$("#6 .decription").val(localStorage.getItem("6"));
$("#7 .decription").val(localStorage.getItem("7"));
$("#8 .decription").val(localStorage.getItem("8"));
$("#9 .decription").val(localStorage.getItem("9"));
$("#10 .decription").val(localStorage.getItem("10"));
$("#11 .decription").val(localStorage.getItem("11"));
$("#12 .decription").val(localStorage.getItem("12"));
$("#13 .decription").val(localStorage.getItem("13"));
$("#14 .decription").val(localStorage.getItem("14"));
$("#15 .decription").val(localStorage.getItem("15"));
$("#16 .decription").val(localStorage.getItem("16"));
$("#17 .decription").val(localStorage.getItem("17"));
$("#18 .decription").val(localStorage.getItem("18"));
$("#19 .decription").val(localStorage.getItem("19"));
$("#20 .decription").val(localStorage.getItem("20"));
$("#21 .decription").val(localStorage.getItem("21"));
$("#22 .decription").val(localStorage.getItem("22"));
$("#23 .decription").val(localStorage.getItem("23"));
});
