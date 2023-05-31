import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import UserProfile from "./pages/UserProfile";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeInstructions from "./pages/RecipeInstructions";
import RecipeSearchResults from "./pages/RecipeSearchResults";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <div style={{ background: "#90ee90", minHeight: "100vh" }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/recipedetails/:rid" element={<RecipeDetails />} />
          <Route path="/instructions/:rid" element={<RecipeInstructions />} />
          <Route path="/search/:query" element={<RecipeSearchResults />} />
          <Route path="/searchpage" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
