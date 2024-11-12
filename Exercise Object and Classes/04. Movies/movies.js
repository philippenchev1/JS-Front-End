function movies(input) {
    const moviesList = [];

    for (let command of input) {
        if (command.startsWith("addMovie")) {
            const movieName = command.replace("addMovie ", "").trim();
            moviesList.push({ name: movieName });
        } else if (command.includes("directedBy")) {
            const [movieName, director] = command.split(" directedBy ");
            const movie = moviesList.find(movie => movie.name === movieName.trim());
            if (movie) {
                movie.director = director.trim();
            }
        } else if (command.includes("onDate")) {
            const [movieName, date] = command.split(" onDate ");
            const movie = moviesList.find(movie => movie.name === movieName.trim());
            if (movie) {
                movie.date = date.trim();
            }
        }
    }

    moviesList
        .filter(movie => movie.name && movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

// Example usage:
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
