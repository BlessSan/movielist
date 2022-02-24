import { Route, Routes } from "react-router-dom";
import App from "./App";
import Actors from "./pages/actorsList";
import Movies from "./pages/moviesList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Movies />} />
        <Route path="actors" element={<Actors />} />
      </Route>
    </Routes>
  );
};

export default Router;
