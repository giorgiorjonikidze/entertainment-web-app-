import "./App.css";
import LoginPage from "./pages/login";
import SighinPage from "./pages/signin";
import NavBar from "./components/navBar";
import Slider from "./components/slider";
import SearchBar from "./components/searchBar";
import MoviesPage from "./pages/moviesPage";
import { Routes, Route} from "react-router-dom"
import Movies from "./components/movies";
import Test from './components/test';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SighinPage />} />
      <Route path="/user" element={<MoviesPage />} />
    </Routes>
  );
}

export default App;
