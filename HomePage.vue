<template>
  <div>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </div>

    <!-- Bootstrap links to css and JavaScript-->
    <link
      rel="stylesheet"
      href="bootstrap-5.3.2-dist/css/bootstrap.css"
    />

    <script async src="./fetchData.js"></script>

    <script src="bootstrap-5.3.2-dist/js/bootstrap.bundle.min.js"></script>

    <!--CSS-->
    <link rel="stylesheet" href="css/index.css" />

    <!--Font-->
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin
    />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />

    <div class="container">
      <!-- Title -->
      <div class="row">
        <div class="col-xs-12">
          <h1 class="lato-bold">Movie Application</h1>
        </div>
      </div>
    </div>

      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg navbar-customcolor" style="border-radius: 0.375rem;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav lato-regular">
              <li class="nav-item">
                <router-link class="nav-link" to="/tvshows">TV Shows</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/movies">Movies</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/categories">Categories</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
            </ul>
          </div>
          <!-- Separate div for search bar aligned to the right -->
          <div class="ms-auto">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn" type="submit"></button>
            </form>
          </div>
        </div>
      </nav>

    <!-- Main content -->
    <div class="row">
        <!-- Main content - Popular Now -->
        <div class="row card-section">
        <div class="col-md-12">
            <h2 class="card-title mb-3 lato-bold">Popular Now</h2>
        </div>
        <div class="col-md-3" v-for="movie in popularMovies" :key="movie.id">
            <div class="card" style="width: 18rem;">
            <img :src="movie.poster" class="card-img-top" alt="..." />
            <div class="card-body lato-regular">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.description }}</p>
                <button @click="addToWatchlist(movie)" class="btn btn-customcolor">Add to Watchlist</button>
            </div>
            </div>
        </div>
        </div>

        <!-- Main content - Fresh Finds -->
        <div class="row card-section">
        <div class="col-md-12">
            <h2 class="card-title mb-3 lato-bold">Fresh Finds</h2>
        </div>
        <div class="col-md-3" v-for="movie in freshFinds" :key="movie.id">
            <div class="card" style="width: 18rem;">
            <img :src="movie.poster" class="card-img-top" alt="..." />
            <div class="card-body lato-regular">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.description }}</p>
                <button @click="addToWatchlist(movie)" class="btn btn-customcolor">Add to Watchlist</button>
            </div>
            </div>
        </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="row lato-regular">
        <div class="col-xs-12">
        <hr />
        <p>MOVIE APPLICATION</p>
        </div>
    </div>
    </template>

    <script>
    export default {
    name: "HomePage",
    data() {
        return {
        popularMovies: [
            {
            id: 1,
            title: "Movie 1",
            description: "blah blah blah",
            poster: "assets/barbiemovieposter.jpeg"
            },
            {
            id: 2,
            title: "Movie 2",
            description: "blah blah blah",
            poster: "assets/barbiemovieposter.jpeg"
            },
            {
            id: 3,
            title: "Movie 3",
            description: "blah blah blah",
            poster: "assets/barbiemovieposter.jpeg"
            },
            {
            id: 4,
            title: "Movie 4",
            description: "blah blah blah",
            poster: "assets/barbiemovieposter.jpeg"
            }
        ],
        freshFinds: [
            {
            id: 1,
            title: "Movie 1",
            description: "blah blah blah",
            poster: "assets/barbiemovieposter.jpeg"
            }
        ]
    };
  },
  methods: {
    addToWatchlist(movie) {
      // Add movie to watchlist logic here
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>