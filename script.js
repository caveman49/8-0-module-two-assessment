fetch(`https://ghibliapi.herokuapp.com/films`)
  .then((response) => response.json())
  .then((movies) => {
    console.log(movies);

    let dropDown = document.querySelector("#dropdown");

    for (let movie of movies) {
      const option = document.createElement("option");
      option.setAttribute("value", movie.original_title_romanised);
      option.textContent = movie.original_title_romanised;
      dropDown.append(option);
    }
  });
