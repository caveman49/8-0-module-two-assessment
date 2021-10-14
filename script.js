fetch(`https://ghibliapi.herokuapp.com/films`)
  .then((response) => response.json())
  .then((movies) => {
    console.log(movies);

    let dropDown = document.querySelector("#dropdown");

    for (let movie of movies) {
      const option = document.createElement("option");
      option.setAttribute("value", movie.title);
      option.textContent = movie.title;
      dropDown.append(option);
    }

    const currentMovie = document.querySelector("#title");
    const movieYear = document.querySelector("#year");
    const movieDescription = document.querySelector("#description");
    let selectedMovie;

    dropDown.addEventListener("change", () => {
      for (let movie of movies) {
        if (dropDown.value === movie.title) {
          selectedMovie = movie;
          currentMovie.textContent = movie.title
          movieYear.textContent = movie.release_date
          movieDescription.textContent = movie.description
        }
      }
    });
  });
