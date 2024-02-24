'use strict';

let numberOfFilms;

function start() {
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
        const gen = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = gen;
    }
}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        
        const one = prompt('Один из последних просмотренных фильмов?', ''),
        two = prompt('На сколько оцените его?', '');
        if (one !== null && two !== null && one !== '' && two !== '' && one.length < 50) {
            personalMovieDB.movies[one] = two;
        } else {
          i--;
        }
    }
    
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }    
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

