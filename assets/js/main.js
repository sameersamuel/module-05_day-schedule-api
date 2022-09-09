
//this function translates the JS into JQuery
$(document).ready(function () {

//pulling the date from Moment
$("#currentDay").text(moment().format("MMM, DD, YYYY"));

//gives functionality to the save buttons
$(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".decription").val();
    console.log(activity);
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, activity);
})


function colorRow(){

    var currentTime = moment().hours();
    console.log(currentTime);

    $(".time-block").each(function(){

        var rowTime = parseInt($(this).attr("id"));
        console.log(rowTime);

        if (rowTime < currentTime) {
            $(this).addClass("past");
        } else if (rowTime === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });

};
colorRow();

setInterval(colorRow, 30000);

//reload from localStorage
$("#8 .decription").val(localStorage.getItem("8"));
$("#8 .decription").val(localStorage.getItem("8"));
$("#8 .decription").val(localStorage.getItem("8"));
$("#8 .decription").val(localStorage.getItem("8"));
$("#8 .decription").val(localStorage.getItem("8"));
$("#8 .decription").val(localStorage.getItem("8"));
});
