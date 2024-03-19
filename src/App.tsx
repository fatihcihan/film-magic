import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Details from "./pages/details/Details";
import Search from "./pages/search/Search";
import MainLayout from "./layout/MainLayout";
import TopRated from "./pages/top-rated/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/search", element: <Search /> },
      { path: "/top-rated", element: <TopRated /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;