const API_KEY = "847acdc9a97ac1e60a0eaa5c27a457ff";

const requests = {
  fetchTrending:
    "/trending/all/week?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&language=en-US",
  fetchNetflixOriginals:
    "/discover/tv?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&with_networks=213",
  fetchTopRated:
    "/movie/top_rated?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&language=en-US",
  fetchActionMovies:
    "/discover/movie?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&with_genres=28",
  fetchComedyMovies:
    "/discover/movie?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&with_genres=35",
  fetchHorrorMovies:
    "/discover/movie?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&with_genres=27",
  fetchRomanceMovies:
    "/discover/movie?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&with_genres=10749",
  fetchDocumentaryMovies:
    "/discover/movie?api_key=847acdc9a97ac1e60a0eaa5c27a457ff&with_genres=99",
};

export default requests;
