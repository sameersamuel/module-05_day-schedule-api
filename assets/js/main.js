$(document).ready(function () {

$("#currentDay").text(moment().format("MMM, DD, YYYY"));
$(".saveBtn").on("click", function() {
    var activity = $(this).siblings(".decription").val();
    console.log(activity);
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, activity);
})
});