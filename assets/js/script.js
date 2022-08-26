var saveBtn = $(".saveBtn");

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

timeBlockColor();
