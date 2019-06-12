/* <script type="text/javascript">

$("button").on("click", function() {
 var team = $(this).attr("data-team");

 console.log(team);

 var queryURL = "https://api.giphy.com/v1/gifs/search?q" +
 team + "api_key=7RLB2QzacNTz6huDLugTD5jPUkAJ0YW9&limit=10";

 $.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response){
    var results = response.data;

for (var i = 0; i < results.length; i++) {
    if (results[i].rating !== "r" && results[i].rating !== "pg-13"){

      var gifDiv = $("<div>");

      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);

        var teamImage = $("<img>");

        teamImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.append(p);
        gifDiv.append(teamImage);

        $("teams-view").prepend(gifDiv);
}

}
</script> */


$("button").on("click", function(){
    var team = $(this).attr("data-team");
    console.log(team) 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
 team + "&api_key=7RLB2QzacNTz6huDLugTD5jPUkAJ0YW9&limit=10";

 $.ajax({
     url: queryURL,
     method: "GET"
 })
 .then(function(response){
     console.log(response.data)
 })

})
$("#add-team").on("click", function(event){
    event.preventDefault()
   var newTeam = $("#teams-input").val().trim()
   console.log(newTeam) 
   $("#teams-input").val("")
var newButton = $("<button>")
newButton.attr({
 "data-team" : newTeam
})  
   $("#buttons-view").append(newButton) 
})




