//  Nina Robichaud
//  4/6/21
//  Interactive Web Design
//  Dev Assignment 2 

// Fetch Movie API's
    // Sources: 
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
    // https://cferreirasuazo.medium.com/getting-movie-data-from-omdbapi-using-fetch-f2b96ae230dd
    // https://www.omdbapi.com/ 
    // https://stackoverflow.com/questions/54775012/fetch-data-from-json-file-using-javascript-and-insert-it-into-a-dropdown-list


// var dataTitle;
// var dataPoster;


let fetchHope = fetch("http://www.omdbapi.com/?t=star+wars&apikey=742e2207");
let fetchEmpire = fetch("http://www.omdbapi.com/?t=empire+strikes+back&apikey=742e2207");
let fetchReturn = fetch("http://www.omdbapi.com/?t=return+of+the+jedi&apikey=742e2207");

fetchHope.then(function(response){
    response.text().then(function(text){
        movieTitle.textContent = text;
    })
})

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=742e2207')
// .then(function(response) {return response.json();})
// .then(function(json) {
//     dataTitle = json.Title;
//     document.getElementById('movieTitle').innerHTML = dataTitle;
// })




