$(document).ready(function() {

  $("#add-landmark").click(function() {
    $("#new-landmarks").append('<div class="new-landmark">' +
                                  '<div class="form-group">' +
                                    '<input type="text" class="form-control landmark" placeholder="Landmark">' +
                                  '</div>' +
                                '</div>');
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place-name").val();
    var inputtedDate = $("input#date-visited").val();
    var inputtedDescription = $("input#place-description").val();
    var inputtedRating = $("input#place-rating").val();

    var newPlace = { placeName: inputtedPlace, placeDate: inputtedDate, placeDescription: inputtedDescription, placeRating: inputtedRating, landmarks: [] };

    $(".new-landmark").each(function() {
      var inputtedLandmark = $(this).find("input.landmark").val();
      console.log(inputtedLandmark);
      var newLandmark = { landmark: inputtedLandmark};
      newPlace.landmarks.push(newLandmark);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function () {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName)
      $(".date-visited").text(newPlace.placeDate)
      $(".place-description").text(newPlace.placeDescription)
      $(".place-rating").text(newPlace.placeRating)

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark.landmark + "</li>");
      });
    });

    $("input#place-name").val("");
    $("input#date-visited").val("");
    $("input#place-description").val("");
    $("input#place-rating").val("")
    $("input.landmark").val("");
  });
});
