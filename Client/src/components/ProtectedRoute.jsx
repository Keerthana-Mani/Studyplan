import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const user = localStorage.getItem("user");

  // require both a loggedIn flag and a stored user object
  return isLoggedIn && user ? children : <Navigate to="/login" />;
}
