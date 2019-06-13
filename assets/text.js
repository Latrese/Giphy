$(document).ready(function(){
    var nflteams = ["Green Bay Packers", "Dallas Cowboys", "Houston Texans", "Seattle Seahawks"]
    for (var i = 0; i < nflteams.length; i++){
        var v = $("<button>");
        v.attr("data-team", nflteams[i]);
        v.text(nflteams[i]);
        v.addClass("gifButton");
        $("#buttons-view").append(v); 
    }
    $("body").on("click", ".gifButton", function(){
        $("#teams-view").empty()
        var team = $(this).attr("data-team");
        console.log(team) 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
     team + "&api_key=7RLB2QzacNTz6huDLugTD5jPUkAJ0YW9&limit=10";
    
     $.ajax({
         url: queryURL,
         method: "GET"
     })
     .then(function(response){
        console.log(queryURL);
    
        console.log(response);
    
         var results = response.data;
         for (var i = 0; i < results.length; i++) {
             var teamDiv = $("<div>");
            
             var p = $("<p>").text("Rating: " + results[i].rating);
             var teamImage = $("<img>");
    
             teamImage.attr("src", results[i].images.fixed_height.url);
    
             teamDiv.append(p);
             teamDiv.append(teamImage);
    
             $("#teams-view").append(teamDiv);
         }
        
    
     })
    
    })
    $("#add-team").on("click", function(event){
        event.preventDefault()
       var newTeam = $("#teams-input").val().trim();
       console.log(newTeam) 
       $("#teams-input").val("")
    var newButton = $("<button>");
    newButton.attr("data-team", newTeam);  
    newButton.addClass("gifButton");
    newButton.text(newTeam);
       $("#buttons-view").append(newButton);
    
    })
    
    
})







