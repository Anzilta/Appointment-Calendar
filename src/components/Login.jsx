// import React, { useState } from "react";
// import {
//   Grid,
//   Paper,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Alert,
//   AppBar,
//   Toolbar,
//   Avatar,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import LogoutIcon from "@mui/icons-material/Logout"; // optional if needed later
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "staff@clinic.com" && password === "123456") {
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/calendar");
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <>
//       {/* ✅ AppBar with Logo and Name */}
//       <AppBar position="static" sx={{ backgroundColor: "#5db152ff" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <Avatar src="/logo192.png" alt="Clinic Logo" />
//             <Typography variant="h6" component="div">
//               Clinic Appointment Portal
//             </Typography>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* ✅ Login Form Below AppBar */}
//       <Grid container className="login-page">
//         {/* Left Side: Form */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           component={Paper}
//           elevation={6}
//           square
//           className="login-left"
//         >
//           <Box className="login-box">
//             <Typography variant="h4" gutterBottom className="login-title">
//               Welcome to Clinic Portal
//             </Typography>
//             <Typography variant="subtitle1" gutterBottom>
//               Staff Login
//             </Typography>

//             <form onSubmit={handleSubmit}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: 2,
//                   mt: 2,
//                 }}
//               >
//                 <TextField
//                   size="small"
//                   label="Email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   sx={{ width: "300px" }}
//                   InputProps={{
//                     sx: {
//                       height: 50,
//                       fontSize: "1rem",
//                     },
//                   }}
//                 />

//                 <TextField
//                   size="small"
//                   label="Password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   sx={{ width: "300px" }}
//                   inputProps={{
//                     sx: {
//                       height: 33,
//                       fontSize: "1rem",
//                     },
//                   }}
//                 />

//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{ width: "300px", fontWeight: "bold" }}
//                 >
//                   Login
//                 </Button>

//                 {error && (
//                   <Alert severity="error" sx={{ width: "250px" }}>
//                     {error}
//                   </Alert>
//                 )}
//               </Box>
//             </form>
//           </Box>
//         </Grid>

//         {/* Right Side: Image */}
//         <Grid item xs={false} md={6} className="login-image">
//           <img src="/logo192.png" alt="Clinic Visual" />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Login;
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      {/* ✅ AppBar with Primary Color */}
      <AppBar position="static" sx={{ backgroundColor: "#2E7D32" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="/logo192.png" alt="Clinic Logo" />
            <Typography variant="h6" sx={{ color: "#F1F8E9", fontWeight: "bold" }}>
              Clinic Appointment Portal
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Login Form */}
      <Grid container className="login-page" sx={{ backgroundColor: "#F1F8E9" }}>
        {/* Left Side: Form */}
        <Grid
          item
          xs={12}
          md={6}
          component={Paper}
          elevation={6}
          square
          className="login-left"
          sx={{ backgroundColor: "#ffffff" }}
        >
          <Box className="login-box">
            <Typography variant="h4" gutterBottom sx={{ color: "#2E7D32", fontWeight: "bold" }}>
              Welcome to Clinic Portal
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: "#1B1B1B" }}>
              Staff Login
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
                  sx={{
                    width: "300px",
                    backgroundColor: "#F1F8E9",
                  }}
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
                  sx={{
                    width: "300px",
                    backgroundColor: "#F1F8E9",
                  }}
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
                    width: "300px",
                    fontWeight: "bold",
                    backgroundColor: "#2E7D32",
                    "&:hover": { backgroundColor: "#1B5E20" },
                  }}
                >
                  Login
                </Button>

                {error && (
                  <Alert severity="error" sx={{ width: "250px" }}>
                    {error}
                  </Alert>
                )}
              </Box>
            </form>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid
          item
          xs={false}
          md={6}
          className="login-image"
          sx={{
            background: "#81C784",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/logo192.png" alt="Clinic Visual"  />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
