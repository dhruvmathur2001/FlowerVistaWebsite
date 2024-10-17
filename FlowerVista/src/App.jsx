import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import About from "./components/About";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Login from "./components/Login"; // Import your Login component
import SignUp from "./components/SignUp";
import Profile from "./components/User/Profile";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import UserSidebar from "./components/User/UserSidebar.jsx";
import { Outlet } from "react-router-dom"; // Import Outlet for sub-routes

function ProfileLayout() {
  return (
    <div className="container mt-4 d-flex">
      <UserSidebar />
      <div className="flex-grow-1 ">
        <Outlet /> {/* This will render the child routes like dashboard, orders, etc. */}
      </div>
    </div>
  );
}

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
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<><SignUp /><Footer /></>} />

          {/* Parent Route for Profile and Sub Routes */}
          <Route path="/profile" element={<ProfileLayout />}>
            <Route path="/profile/" element={<Profile />} />
            
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
