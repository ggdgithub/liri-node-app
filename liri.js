require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// var artist = something;
// the commands
    // node liri.js concert-this <artist/band name here>
    // node liri.js spotify-this-song '<song name here>'
    // node liri.js movie-this '<movie name here>'

// GOAL OF APP:
    // accept input
        // song
        // film
        // artist
    // push results using axios
        // info about song
            // artist(s)
            // song name
            // preview link
            // song album
        // info about movie
            // movie title
            // movie release year
            // imdb rating
            // rotten tomates rating
            // country where movie was produced
            // language of the movie
            // plot of the movie
            // actors in the movie