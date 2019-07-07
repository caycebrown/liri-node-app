# About
A basic CLI-application that uses axios to make requests to various API's depending on user console input. This application was developed with Node and as such requires Node to run. The application makes requests for data from Spotify, Bandsintown, and OMDB via their respective API's. Inquirer is used to navigate between API requests as well as input parameters for each API search.

## Getting started

### Requirements

* Node --> [Get Node](https://nodejs.org/en/)
* Spotify developer account with personal Spotify keys - (free) 


### Installation/Setup

To begin you will need to fork your own copy of this repository. [(How-to fork a repository)](https://help.github.com/en/articles/fork-a-repo)

If you don't already have a Spotify developer account you will need to make one to obtain the needed Spotify credentials for this app.
Simply go here --> [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/), and then login using your Spotify account. 
* Note: You can sign up for a free general use Spotify account if you don't already have one.

Next, inside of the folder created by cloning this repository you need to create a file called '.env' - this will be used to store and utilize the Spotify API keys that you obtained. 

Inside the .env file you will need to add the following:

```js
# Spotify API keys

SPOTIFY_ID=paste-your-spotify-id-here
SPOTIFY_SECRET=paste-your-spotify-secret-here
```
Next you will need to start your preferred terminal and navigate to the folder where your forked project resides. Once there, run the command `npm install`, for this to work you will need to have Node installed. 
If you don't already, once more, you can find it here --> [Node Homepage](https://nodejs.org/en/).

When npm is done installing all dependencies you will need to then run the command `node liri.js`.

**The app should now be running in your terminal - enjoy, and feel free to make it your own!**
