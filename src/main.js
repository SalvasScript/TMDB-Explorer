async function getTrendingMoviesPreview() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=es&api_key=c95c7ba184b0a71e6c3c69e80d2a0a4e"
  );
  const trendingMovies = document.querySelector(".trendingPreview-movieList");
  const data = await res.json();
  data.results.forEach((movie) => {
    const divMovieContainer = document.createElement("div");
    divMovieContainer.classList.add("movie-container");
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    trendingMovies.appendChild(divMovieContainer);
    divMovieContainer.appendChild(movieImg);
  });
}

async function getCategegoriesPreview() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=es&api_key=c95c7ba184b0a71e6c3c69e80d2a0a4e"
  );
  const data = await res.json();
  const categoriesPreviewList = document.querySelector(
    ".categoriesPreview-list"
  );
  const categoryData = data.genres;

  categoryData.forEach((category) => {
    const categoryContainer = document.createElement("div");
    const categoryTitle = document.createElement("h3");
  });
}

getTrendingMoviesPreview();
getCategegoriesPreview();
