"use strict";

const number0films = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Сколько фильмов вы уже посмотрели?', ''),
      b = prompt('На сколько оцените его?', ''),
      с = prompt('Сколько фильмов вы уже посмотрели?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);