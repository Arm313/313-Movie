import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AppRouter from "./Routes/AppRouter";
import { fetchMoviesNowPlaying, fetchMoviesPopular, fetchMoviesTopRated, fetchMoviesUpcoming } from "./store/Movies/API";
import { fetchTVAiringToday, fetchTVOnTheAir, fetchTVPopular, fetchTVTopRated } from "./store/TV/API";

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchMoviesPopular());
    dispatch(fetchMoviesNowPlaying());
    dispatch(fetchMoviesTopRated());
    dispatch(fetchMoviesUpcoming());

    dispatch(fetchTVAiringToday());
    dispatch(fetchTVOnTheAir());
    dispatch(fetchTVPopular());
    dispatch(fetchTVTopRated());
  }, []);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/157336?api_key=6d6201b781767bb726386a018def2080
// https://api.themoviedb.org/3/movie/343611?&append_to_response=videos&api_key=6d6201b781767bb726386a018def2080
