import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AppRouter from "./Routes/AppRouter";
import { fetchAllMovies } from "./store/Movies/API";
import { fetchAllSeries } from "./store/TV/API";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchAllMovies({ property: "popular", page: 1 })),
          dispatch(fetchAllMovies({ property: "top_rated", page: 1 })),
          dispatch(fetchAllMovies({ property: "now_playing", page: 1 })),
          dispatch(fetchAllMovies({ property: "upcoming", page: 1 })),

          dispatch(fetchAllSeries({ property: "popular", page: 1 })),
          dispatch(fetchAllSeries({ property: "airing_today", page: 1 })),
          dispatch(fetchAllSeries({ property: "top_rated", page: 1 })),
          dispatch(fetchAllSeries({ property: "on_the_air", page: 1 })),
        ]);
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
