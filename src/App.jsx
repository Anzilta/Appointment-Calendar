import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import CalendarPage from "./components/CalendarPage";

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/calendar"
          element={isLoggedIn ? <CalendarPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
