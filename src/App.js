import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import EditingForm from "./Pages/EditingForm";
import MovieDetails from "./Pages/MovieDetails";
import Error from "./Components/Error";
import { MoviesContextProvider } from "./Context/MoviesContext";
import { mood } from "./Data";

function App() {
  return (
    <MoviesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="edit" element={<Edit />} />

            <Route path=":id/movie-details" element={<MovieDetails />} />
            <Route path=":id/editing" element={<EditingForm />} />

            <Route
              path="*"
              element={
                <Error text={"Error 404: Page Not Found!"} mood={mood.angry} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesContextProvider>
  );
}

export default App;
