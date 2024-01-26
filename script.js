"use strict";

const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
 
const personalMovieDB = { 
    count: number0fFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false 
}; 
 
// const a = prompt('Какой твой любимый фильм?', ''), 
//       b = prompt('На сколько оцените его?', ''), 
//       c = prompt('Какой твой любимый фильм?', ''), 
//       d = prompt('На сколько оцените его?', ''); 
      
//       personalMovieDB.movies[a] = b; 
//       personalMovieDB.movies[c] = d;
      
      
for (let i = 0; i < 2; i++) {
    const a = prompt('Какой твой любимый фильм?', ''), 
          b = prompt('На сколько оцените его?', '');

    personalMovieDB.movies [a] = b; 
}

console.log(personalMovieDB);