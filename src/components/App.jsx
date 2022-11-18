import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
// import Cast from "./Cast";
import Reviews from "./Reviews";
import Cast from "./Cast";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews /> }></Route>
          </Route>
          <Route path="*" element={<Home />}></Route>

        </Route>
        </Routes>
    </>
  );
};
