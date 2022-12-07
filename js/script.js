// let numberOfFilms = +prompt('Qancha film ko`rgansiz?');


// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }


// let sawFilm = prompt('Oxirgi ko`rgan filimlaringizdan biri?');
// let priceFilm = +prompt('Uni qancha baholagan bo`lardingiz?');


// personalMovieDB.movies[sawFilm] = priceFilm;


// console.log(personalMovieDB.movies);


let name = prompt("What is your name?");
let surname = prompt("What is your surname");
let age = +prompt("How old are you");
    
function setInfo(students) 
    {
        let infos = {
             students: {
                name: name,
                surname: surname,
                age: age,
             }
             }
             console.log(infos);
    }
     setInfo();


