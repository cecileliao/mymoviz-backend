var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const KEY_API = process.env.KEY_API;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
   .then(response => response.json())
   .then(data => {
     res.json({ movies: data.results });
  });
});




module.exports = router;
