// requires
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Variables to hold LIRI commands and queries after "node liri.js":

// for the LIRI command (eg. concert-this, spotify-this-song, etc.)
var liriType = process.argv[2];

// for the search term (eg. Yesterday, Vampire Weekend, Avengers: Endgame, etc.)
var liriQuery = process.argv[3];

// "spotify-this-song"
if (process.argv[2] === "spotify-this-song") {
    spotify
    .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error('Error occurred: ' + err);
    });
    // artist(s)
    // song name
    // preview link
    // song album
    
// "concert-this"
} else if (process.argv[2] === "concert-this") {
    // stuff here
    // Name of venue
    // Venue location
    // date of event
    
// "movie-this"
} else if (process.argv[2] === "movie-this") {
    // stuff here
    // movie title
    // movie release year
    // imdb rating
    // rotten tomates rating
    // country where movie was produced
    // language of the movie
    // plot of the movie
    // actors in the movie
    
// "do-what-it-says"
} else if (process.argv[2] === "do-what-it-says") {
    // stuff here
    // use random.txt

// else end here
} else {
    // stuff here
}
