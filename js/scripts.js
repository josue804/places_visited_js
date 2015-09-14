$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newPerson = {firstName: inputtedFirstName, lastName: inputtedLastName, places: []};

    $(".newPlace").each(function() {
      var inputtedPlace = $("input#place-name").val();
      var inputtedDate = $("input#place-date-visited").val();
      var inputtedDescription = $("input#place-description").val();
      var inputtedRating = $("input#place-rating").val();
      var newPlace = { placeName: inputtedPlace, placeDate: inputtedDate, placeDescription: inputtedDescription, placeRating: inputtedRating, landmarks: [] };

      
    });
  });
});
