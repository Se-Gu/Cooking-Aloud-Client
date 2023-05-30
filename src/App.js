import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import UserProfile from "./pages/UserProfile";
import { AuthProvider } from 'react-auth-kit'

export default function App() {
  return (
    <div>
	
    
      <Header />
      <BrowserRouter>
	  <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "http:"}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
		</AuthProvider>
      </BrowserRouter>
    </div>
  );
}
