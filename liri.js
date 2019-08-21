// requires
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Variables to hold LIRI commands and queries after "node liri.js":
// -----------------------------------------------------------------
// for the LIRI command (eg. concert-this, spotify-this-song, etc.)
var liriCommand = process.argv[2];

// for the search term (eg. Yesterday, Vampire Weekend, Avengers: Endgame, etc.)
var liriQuery = process.argv[3];

// thing to add "+" in-between the words of the query
for (var i = 4; i < process.argv.length; i++) {
    if (i > 4 && i < process.argv.length) {
        liriQuery += "+" + process.argv[i];
    }
    else {
        liriQuery += process.argv[i];
    }
}

// "spotify-this-song"
if (liriCommand === "spotify-this-song") {
    spotify.search({ type: "track", query: liriQuery }, function (err, data) {
        if (err) {
            console.log(err);
        }

        var queriedSong = data.tracks.items;
        console.log("Artist: " + queriedSong[0].artists[0].name);
        console.log("Song Name: " + queriedSong[0].name);
        console.log("Preview Link: " + queriedSong[0].preview_url);
        console.log("Album: " + queriedSong[0].album.name);
    });
}
else if (liriCommand === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + liriQuery + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log("Venue Name: "+ response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Date of the Event: " + moment(response.data[i].datetime).format("L"));
        }
    });
}

// "movie-this"
else if (liriCommand === "movie-this") {
    axios.get("http://www.omdbapi.com/?t=" + liriQuery + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country/Countries Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        });
}

// "do-what-it-says"
else if (liriCommand === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {

        if (err) {
            logThis(err);
        }

        // comma is the fence between neighbors...
        var readArray = data.split(",");

        // make second part the liriQuery
        liriQuery = readArray[1];

        spotify.search({ type: "track", query: liriQuery }, function (err, data) {
            if (err) {
                console.log(err);
            }

            var queriedSong = data.tracks.items;
            console.log("Artist: " + queriedSong[0].artists[0].name);
            console.log("Song Name: " + queriedSong[0].name);
            console.log("Preview Link: " + queriedSong[0].preview_url);
            console.log("Album: " + queriedSong[0].album.name);
        });
    });
}

// "enter valid input please"
else {
    console.log("Please enter a valid command and search term (eg. node liri.js movie-this Godzilla)");
};
