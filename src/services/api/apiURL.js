export const API_URL = {
  getTrendingMovies: "/trending/movie/day?language=en-US",
  getTrendingAll: "/trending/all/day?language=en-US",
  getTrendingPeople: "/trending/person/day?language=en-US",
  getTrendingTv: "/trending/tv/day?language=en-US",

  // /* detail id */
  // getMovieId: `/movie/${id}?language=en-US`,
  // Fungsi untuk mengambil detail film berdasarkan ID
  getMovieId: (id) => `/movie/${id}?language=en-US`,

  // trailer movie id
  getMovieTrailer: (id) => `/movie/${id}/videos?language=en-US`,
};
