import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Details from "./pages/details/movie-detail/MovieDetails";
import MainLayout from "./layout/MainLayout";
import TopRatedMovies from "./pages/movies/top-rated/TopRatedMovies";
import PopularMovies from "./pages/movies/popular/PopularMovies";
import PopularSeries from "./pages/tv-series/popular/PopularSeries";
import TopRatedSeries from "./pages/tv-series/top-rated/TopRatedSeries";
import { MyMovieList } from "./components/MyMovieList/MyMovieList";
import HeroSection from "./components/HeroSection/HeroSection";
import MoviePreviews from "./components/MoviePreviews/MoviePreviews";
import MovieShowcase from "./components/MovieShowcase/MovieShowcase";
import MovieBlog from "./components/MovieBlog/MovieBlog";
import DividerSection from "./components/DividerSection/DividerSection";
import ApproachSection from "./components/ApproachSection/ApproachSection";
import DiscoverGenres from "./components/DiscoverGenres/DiscoverGenres";
import ContactSection from "./components/ContactSection/ContactSection";
import MovieDetails from "./pages/details/movie-detail/MovieDetails";
import SerieDetails from "./pages/details/serie-detail/SerieDetails";
import ScrollToTopButton from "./components/ScrollTopToButton/ScrollTopToButton";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <>
            <HeroSection />
            <MovieShowcase />
            <MoviePreviews />
            <MovieBlog />
            <DividerSection />
            <ApproachSection />
            <DiscoverGenres />
            <ContactSection />
            <ScrollToTopButton />
          </>
        ),
      },
      {
        path: "home",
        element: (
          <>
            <HeroSection />
            <MovieShowcase />
            <MoviePreviews />
            <MovieBlog />
            <DividerSection />
            <ApproachSection />
            <DiscoverGenres />
            <ContactSection />
            <ScrollToTopButton />
          </>
        ),
      },
    ],
  },
  {
    path: "/movies",
    element: <MainLayout />,
    children: [
      { path: "popular", element: <PopularMovies /> },
      { path: "top-rated", element: <TopRatedMovies /> },
      { path: "popular/details/:id", element: <MovieDetails /> },
      { path: "top-rated/details/:id", element: <MovieDetails /> },
      { path: "details/:id", element: <MovieDetails /> },
    ],
  },
  {
    path: "/tv-series",
    element: <MainLayout />,
    children: [
      { path: "popular", element: <PopularSeries /> },
      { path: "top-rated", element: <TopRatedSeries /> },
      { path: "popular/details/:id", element: <SerieDetails /> },
      { path: "top-rated/details/:id", element: <SerieDetails /> },
      { path: "details/:id", element: <SerieDetails /> },
    ],
  },
  {
    path: "/my-list",
    element: <MainLayout />,
    children: [
      { path: "movie", element: <MyMovieList /> },
      { path: "movie/details/:id", element: <MovieDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
