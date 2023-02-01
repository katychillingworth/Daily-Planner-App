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
})

// TODO Persist events between page refreshes

function loadCalendar() {}

// TODO Add a button to clear calendar

// TODO 