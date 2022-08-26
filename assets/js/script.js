var saveBtn = $(".saveBtn");

// displays current day on top of the page
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

//time block color coding according to past/present/future
function timeBlockColor() {
  var hour = moment().hours();
  $(".time-block").each(function () {
    var currHour = parseInt($(this).attr("id"));
    if (currHour > hour) {
      $(this).addClass("future");
    } else if (currHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

// save button trigger
saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();
  // Saves value in local storage
  localStorage.setItem(time, plan);
});

//retrieves local storage values
function usePlanner() {
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currPlan = localStorage.getItem(currHour);
    if (currPlan !== null) {
      $(this).siblings(".plan").val(currPlan);
    }
  });
}

timeBlockColor();
usePlanner();
