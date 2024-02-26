'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let gen = prompt(`Ваш любимый жанр под номером ${i}`);

            if (gen == null && gen == '') {
                gen--;
            } else {
                personalMovieDB.genres[i - 1] = gen;
            }
        }  
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });  
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
    
            const one = prompt('Один из последних просмотренных фильмов?', ''),
            two = prompt('На сколько оцените его?', '');
            if (one !== null && two !== null && one !== '' && two !== '' && one.length < 50) {
                personalMovieDB.movies[one] = two;
            } else {
              i--;
            }
        }
    
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }    
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat 
        }   
};



const {start, writeYourGenres, rememberMyFilms, detectPersonalLevel,showMyDB, toggleVisibleMyDB} = personalMovieDB;

start();

writeYourGenres();

rememberMyFilms();

detectPersonalLevel();

toggleVisibleMyDB();

showMyDB(personalMovieDB.privat);
