const express = require("express");
const cors = require("cors");
const listMoviesController = require("./controllers/listMoviesController");
const movieDetailsController = require("./controllers/movieDetailsController");
const movieReviewsContoller = require("./controllers/movieReviewController");
const PORT = process.env.PORT || 3001;
const server = express();
const url = `http://localhost:${PORT}`;

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

server.get("/list_movies/:page?&&:term?", listMoviesController)
server.get("/movie_details/:id", movieDetailsController)
server.get("/movie_reviews/:id", movieReviewsContoller)

server.listen(PORT, () => {
  console.log(`Server is running on ${url}`);
});
