import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import UserProfile from "./pages/UserProfile";
import RecipeDetails from "./pages/RecipeDetails";
import RecipeInstructions from "./pages/RecipeInstructions";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/recipedetails/:rid" element={<RecipeDetails />} />
          <Route path="/instructions/:rid" element={<RecipeInstructions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
