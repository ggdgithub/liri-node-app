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
}

// var artist = something;
// the commands
    // maybe this goes here?
    // axios({
    //     url: 'https://accounts.spotify.com/api/token',
    //     method: 'post',
    //     params: {
    //       grant_type: 'client_credentials'
    //     },
    //     headers: {
    //       'Accept':'application/json',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     auth: {
    //       username: 'YOUR-CLIENT-ID',
    //       password: 'YOUR-CLIENT-SECRET'
    //     }
    //   }).then(function(response) {
    //       console.log(response);
    //   }).catch(function(error) {
    //   });
    // node liri.js concert-this <artist/band name here>
        // somehow use this: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    // node liri.js spotify-this-song '<song name here>'
    // node liri.js movie-this '<movie name here>'
    // node liri.js do-what-it-says

// GOAL OF APP:
    // accept input
        // song
        // film
        // artist/concert
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