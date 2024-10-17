import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Login from "./components/Login"; // Import your Login component
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Background />
              <About />
              <Products />
              <Reviews />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
