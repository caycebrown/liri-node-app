require("dotenv").config();

var keys = require('./keys');

var Spotify = require('node-spotify-api');

var moment = require('moment');

var axios = require('axios');




//===================================================================================================
//Spotify API funtion
//===================================================================================================
function spotifyThis(){

  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: process.argv[2], limit: 1 }, function(err, data) {
      if (err) return console.log('Error occurred: ' + err);
    console.log('\nAlbum: ' + data.tracks.items[0].album.name);
    console.log('Artist: ' + data.tracks.items[0].artists[0].name);
    console.log('Track Name: ' + data.tracks.items[0].name);
    console.log('Preview Link: ' + data.tracks.items[0].preview_url);
    });

};




//===================================================================================================
//OMDB API Function
//===================================================================================================
function movieThis(){

  var title = process.argv[3];

  axios.get(`http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`).then(
    function(response) {
      console.log('\nTitle: ' + response.data.Title);
      console.log('Year of Release: ' + response.data.Year);
      console.log('IMDB Rating: ' + response.data.imdbRating);
      console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
      console.log('Country: ' + response.data.Country);
      console.log('Language: ' + response.data.Language);
      console.log('Plot: ' + response.data.Plot);
      console.log('Actors: ' + response.data.Actors);
    }
  );

};




//===================================================================================================
//Bands in town API function
//===================================================================================================
function concertThis(){

  var artist = process.argv[4];

  axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`).then(
    function(response) {
      console.log('\n'+ response.data[0].venue.name);
      console.log(response.data[0].venue.city + ', ' + response.data[0].venue.country);
      console.log(response.data[0].datetime);
    }
  );

};