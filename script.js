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

    //loop through movie object and give specific details based on chosen movie
    dropDown.addEventListener("change", (event) => {
      for (let movie of movies) {
        if (dropDown.value === movie.title) {
          selectedMovie = movie;
          currentMovie.textContent = movie.title;
          movieYear.textContent = movie.release_date;
          movieDescription.textContent = movie.description;
        }
      }
    });

    //user inputs review in form and diplays history
    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const reviewList = document.createElement("li");
      document.querySelector('ul').append(reviewList);
      reviewList.innerHTML = `<strong><b>${document.querySelector('select').value}:</strong></b> ${event.target.search.value}`;

      event.target.reset();
    });
  });
