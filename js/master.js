

$(document).ready(function() {
  var car = $("#dsds").carousel();

  $("a.prev").on("click", function(event) {
    event.preventDefault();
    car.carousel("prev");
  })

});
