$(document).ready(function () {

// Adds current date to the header
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do YYYY"));

// TODO Add timeblocks for standard business hours when the user scrolls down
// Is in HTML file

// TODO Add colours for past/present/future

// TODO Allow user to enter an event when they click timeblock
// Is in HTML file

// TODO Save the event in local storage
$(".saveBtn").on("click", function () {

    var eventAt9 = $("#9").val();
    localStorage.setItem('9am:', eventAt9);

    var eventAt10 = $("#10").val();
    localStorage.setItem('10am:', eventAt10);

    var eventAt11 = $("#11").val();
    localStorage.setItem('11am:', eventAt11);

    var eventAt12 = $("#12").val();
    localStorage.setItem('12pm:', eventAt12);

    var eventAt1 = $("#1").val();
    localStorage.setItem('1pm:', eventAt1);

    var eventAt2 = $("#2").val();
    localStorage.setItem('2pm:', eventAt2);

    var eventAt3 = $("#3").val();
    localStorage.setItem('3pm:', eventAt3);

    var eventAt4 = $("#4").val();
    localStorage.setItem('4pm:', eventAt4);

    var eventAt5 = $("#5").val();
    localStorage.setItem('5pm:', eventAt5);
})

// TODO Persist events between page refreshes

function loadCalendar() {
    $("#9").val(localStorage.getItem("9am:"));
    $("#10").val(localStorage.getItem("10am:"));
    $("#11").val(localStorage.getItem("11am:"));
    $("#12").val(localStorage.getItem("12pm:"));
    $("#1").val(localStorage.getItem("1pm:"));
    $("#2").val(localStorage.getItem("2pm:"));
    $("#3").val(localStorage.getItem("3pm:"));
    $("#4").val(localStorage.getItem("4pm:"));
    $("#5").val(localStorage.getItem("5pm:"));
}

loadCalendar();

})

// TODO Add a button to clear calendar

// TODO 