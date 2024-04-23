import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import MainLayout from "./layout/MainLayout";
import TopRatedMovies from "./pages/movies/top-rated/TopRatedMovies";
import PopularMovies from "./pages/movies/popular/PopularMovies";
import PopularSeries from "./pages/tv-series/popular/PopularSeries";
import TopRatedSeries from "./pages/tv-series/top-rated/TopRatedSeries";
import { MyMovieList } from "./components/MyMovieList/MyMovieList";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import BlogSection from "./components/BlogSection/BlogSection";
import DividerSection from "./components/DividerSection/DividerSection";
import ApproachSection from "./components/ApproachSection/ApproachSection";
import TeamSection from "./components/TeamSection/TeamSection";
import ContactSection from "./components/ContactSection/ContactSection";

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
            <ProjectSection />
            <AboutUsSection />
            <BlogSection />
            <DividerSection />
            <ApproachSection />
            <TeamSection />
            <ContactSection />
          </>
        ),
      },
      {
        path: "home",
        element: (
          <>
            <HeroSection />
            <ProjectSection />
            <AboutUsSection />
            <BlogSection />
            <DividerSection />
            <ApproachSection />
            <TeamSection />
            <ContactSection />
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
      { path: "popular/details/:id", element: <Details /> },
      { path: "top-rated/details/:id", element: <Details /> },
    ],
  },
  {
    path: "/tv-series",
    element: <MainLayout />,
    children: [
      { path: "popular", element: <PopularSeries /> },
      { path: "top-rated", element: <TopRatedSeries /> },
      { path: "popular/details/:id", element: <Details /> },
      { path: "top-rated/details/:id", element: <Details /> },
    ],
  },
  {
    path: "/my-list",
    element: <MainLayout />,
    children: [
      { path: "movie", element: <MyMovieList /> },
      { path: "movie/details/:id", element: <Details /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
