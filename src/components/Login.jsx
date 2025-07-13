import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  AppBar,
  Toolbar,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "staff@clinic.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/calendar");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      {/* ✅ AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#2E7D32" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="/pfactorial-logo.jpg" alt="Clinic Logo" />
            <Typography
              variant="h6"
              sx={{ color: "#F1F8E9", fontWeight: "bold" }}
            >
              Pfactorial Clinic Appointment Portal
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Responsive Grid Layout */}
      <Grid
        container
        className="login-page"
        sx={{
          backgroundColor: "#F1F8E9",
          minHeight: "100vh",
         
        }}
      >
        {/* 📸 Image Box */}
        <Grid
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 2 },
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "calc(100vh)" }, // minus AppBar height
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <img
            src="/3.jpg"
            alt="Clinic Visual"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* 📝 Login Form Box */}
        <Grid
          xs={12}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            order: { xs: 2, md: 1 },
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "calc(100vh)" },
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "400px" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#2E7D32",
                textShadow: "3px 3px 4px rgba(13, 57, 7, 0.3)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              WELCOME CLINIC PORTAL
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "#004411ff", textAlign: "center" }}
            >
              STAFF LOGIN
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <TextField
                  size="small"
                  label="Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: "100%", backgroundColor: "#F1F8E9" }}
                  InputProps={{
                    sx: {
                      height: 50,
                      fontSize: "1rem",
                      color: "#1B1B1B",
                    },
                  }}
                />

                <TextField
                  size="small"
                  label="Password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ width: "100%", backgroundColor: "#F1F8E9" }}
                  inputProps={{
                    sx: {
                      height: 33,
                      fontSize: "1rem",
                      color: "#1B1B1B",
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontWeight: "bold",
                    backgroundColor: "#2E7D32",
                    "&:hover": { backgroundColor: "#1B5E20" },
                  }}
                >
                  Login
                </Button>

                {error && (
                  <Alert severity="error" sx={{ width: "100%" }}>
                    {error}
                  </Alert>
                )}
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
