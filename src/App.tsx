import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import MainLayout from "./layout/MainLayout";
import TopRatedMovies from "./pages/movies/top-rated/TopRatedMovies";
import PopularMovies from "./pages/movies/popular/PopularMovies";
import PopularSeries from "./pages/tv-series/popular/PopularSeries";
import TopRatedSeries from "./pages/tv-series/top-rated/TopRatedSeries";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { index: true, element: <Home /> },
      // { path: "/", element: <Home /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/movies/popular", element: <PopularMovies /> },
      { path: "/movies/top-rated", element: <TopRatedMovies /> },
      { path: "/tv-series/popular", element: <PopularSeries /> },
      { path: "/tv-series/top-rated", element: <TopRatedSeries /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
