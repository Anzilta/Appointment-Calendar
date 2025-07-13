// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./CalendarPage.css";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Modal,
//   TextField,
//   MenuItem,
//   Avatar,
// } from "@mui/material";
// import LogoutIcon from "@mui/icons-material/Logout";

// const patients = ["Alice", "Bob", "Charlie"];
// const doctors = ["Dr. Smith", "Dr. Patel", "Dr. Lee"];

// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [appointments, setAppointments] = useState(() => {
//     const data = localStorage.getItem("appointments");
//     return data ? JSON.parse(data) : {};
//   });

//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({ patient: "", doctor: "", time: "" });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("appointments", JSON.stringify(appointments));
//   }, [appointments]);
//     // ✅ Detect mobile screen
//   const isMobile = useMediaQuery("(max-width:768px)");

//   // ✅ Log to console when `isMobile` changes
//   useEffect(() => {
//     console.log("Is mobile view:", isMobile);
//   }, [isMobile]);


//   const handleDayClick = (date) => {
//     setSelectedDate(date);
//     setFormData({ patient: "", doctor: "", time: "" });
//     setEditingIndex(null);
//     setOpen(true);
//   };

//   const handleSave = () => {
//     const key = selectedDate.toDateString();
//     const existing = appointments[key] || [];
//       const isDuplicate = existing.some((a, index) => 
//     a.time === formData.time && index !== editingIndex
//   );

//   if (isDuplicate) {
//     alert("An appointment already exists at this time!");
//     return;
//   }


//     const updated =
//       editingIndex !== null
//         ? [...existing.slice(0, editingIndex), formData, ...existing.slice(editingIndex + 1)]
//         : [...existing, formData];

//     setAppointments({ ...appointments, [key]: updated });
//     setOpen(false);
//     setEditingIndex(null);
//   };

//   const handleDelete = (indexToDelete) => {
//     const key = selectedDate.toDateString();
//     const updated = (appointments[key] || []).filter((_, i) => i !== indexToDelete);
//     const newAppointments = { ...appointments };

//     if (updated.length > 0) newAppointments[key] = updated;
//     else delete newAppointments[key];

//     setAppointments(newAppointments);
//     setEditingIndex(null);
//     setFormData({ patient: "", doctor: "", time: "" });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     window.location.href = "/";
//   };

//   const tileContent = ({ date }) => {
//     const key = date.toDateString();
//     const appts = appointments[key] || [];
//     if (!appts.length) return null;

//     return (
//       <ul style={{ paddingLeft: 4, margin: 0, listStyle: "none" }}>
//         {appts.slice(0, 2).map((a, i) => (
//           <li
//             key={i}
//             style={{
//               fontSize: "0.65rem",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               color: "#1B1B1B",
//             }}
//           >
//             {a.time} - {a.patient}
//           </li>
//         ))}
//         {appts.length > 2 && (
//           <li style={{ fontSize: "0.6rem", color: "#888" }}>
//             +{appts.length - 2} more
//           </li>
//         )}
//       </ul>
//     );
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "#F1F8E9", // Accent background
//         color: "#1B1B1B",
//       }}
//     >
//       {/* ✅ AppBar */}
//       <AppBar position="static" sx={{ backgroundColor: "#2E7D32" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <Avatar src="/pfactorial-logo.jpg" alt="Clinic Logo" />
//             <Typography variant="h6" sx={{ color: "#F1F8E9", fontWeight: "bold" }}>
//              Pfactorial Clinic Appointment Portal
//             </Typography>
//           </Box>
//           <Button color="inherit" endIcon={<LogoutIcon />} onClick={handleLogout}>
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* ✅ Page Content */}
//       <Box sx={{ p: 2 }}>
//         <Typography variant="h4" sx={{ textAlign: "center", mb: 2, color: "#2E7D32" }}>
//           Appointment Calendar
//         </Typography>

//         {/* 🔍 Search */}
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
//           <TextField
//             label="Search by patient, doctor or date"
//             size="small"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             sx={{ width: "300px", backgroundColor: "#ffffff" }}
//             inputProps={{ style: { color: "#1B1B1B" } }}
//           />
//         </Box>

//         {/* 🔎 Search Results */}
//         {searchTerm && (
//           <Box sx={{ mb: 3, px: 4 }}>
//             <Typography variant="h6">Search Results:</Typography>
//             {Object.entries(appointments).map(([date, list]) =>
//               list
//                 .filter(
//                   (a) =>
//                     a.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     a.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                     date.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//                 .map((a, i) => (
//                   <Box
//                     key={`${date}-${i}`}
//                     sx={{
//                       mt: 1,
//                       p: 1,
//                       backgroundColor: "#ffffff",
//                       borderLeft: "4px solid #81C784",
//                       borderRadius: 1,
//                       boxShadow: 1,
//                     }}
//                   >
//                     <Typography variant="body2">
//                       📅 {date} — 🕒 {a.time} — 👤 {a.patient} — 🩺 {a.doctor}
//                     </Typography>
//                   </Box>
//                 ))
//             )}
//           </Box>
//         )}

//         {/* 📅 Calendar */}
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto" }}>
//           <Calendar
//             onClickDay={handleDayClick}
//             onChange={setSelectedDate}
//             value={selectedDate}
//             tileContent={tileContent}
//             className="calendar-full"
//           />
//         </Box>
//       </Box>

//       {/* ✏️ Modal */}
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <Box
//           sx={{
//             p: 4,
//             width: 400,
//             bgcolor: "#ffffffff",
//             borderRadius: 2,
//             boxShadow: 24,
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <Typography variant="h6" gutterBottom sx={{ color: "#2E7D32" }}>
//             {editingIndex !== null
//               ? `Edit Appointment for ${selectedDate.toDateString()}`
//               : `Add Appointment for ${selectedDate.toDateString()}`}
//           </Typography>

//           {/* Editable list */}
//           {(appointments[selectedDate.toDateString()] || []).length > 0 && (
//             <Box sx={{ mb: 2 }}>
//               <Typography variant="subtitle2" sx={{ color: "#1B1B1B" }}>
//                 Tap to Edit or Delete:
//               </Typography>
//               {(appointments[selectedDate.toDateString()] || []).map((a, idx) => (
//                 <Box
//                   key={idx}
//                   sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, gap: 1 }}
//                 >
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     sx={{ textTransform: "none", color: "#1B1B1B" }}
//                     onClick={() => {
//                       setFormData(a);
//                       setEditingIndex(idx);
//                     }}
//                   >
//                     🕒 {a.time} — 👤 {a.patient} — 🩺 {a.doctor}
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="error"
//                     size="small"
//                     onClick={() => handleDelete(idx)}
//                   >
//                     🗑
//                   </Button>
//                 </Box>
//               ))}
//             </Box>
//           )}

//           {/* Form */}
//           <TextField
//             fullWidth
//             select
//             label="Patient"
//             value={formData.patient}
//             onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
//             margin="normal"
//           >
//             {patients.map((p) => (
//               <MenuItem key={p} value={p}>{p}</MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             fullWidth
//             select
//             label="Doctor"
//             value={formData.doctor}
//             onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
//             margin="normal"
//           >
//             {doctors.map((d) => (
//               <MenuItem key={d} value={d}>{d}</MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             fullWidth
//             type="time"
//             label="Time"
//             InputLabelProps={{ shrink: true }}
//             value={formData.time}
//             onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//             margin="normal"
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             sx={{ mt: 2, backgroundColor: "#2E7D32", "&:hover": { backgroundColor: "#1B5E20" } }}
//             onClick={handleSave}
//           >
//             {editingIndex !== null ? "Update Appointment" : "Save Appointment"}
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default CalendarPage;
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarPage.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Modal,
  TextField,
  MenuItem,
  Avatar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const patients = ["Alice", "Bob", "Charlie"];
const doctors = ["Dr. Smith", "Dr. Patel", "Dr. Lee"];

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState(() => {
    const data = localStorage.getItem("appointments");
    return data ? JSON.parse(data) : {};
  });

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ patient: "", doctor: "", time: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    console.log("Is mobile view:", isMobile);
  }, [isMobile]);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setFormData({ patient: "", doctor: "", time: "" });
    setEditingIndex(null);
    setOpen(true);
  };

  const handleSave = () => {
    const key = selectedDate.toDateString();
    const existing = appointments[key] || [];

    const isDuplicate = existing.some((a, index) =>
      a.time === formData.time && index !== editingIndex
    );

    if (isDuplicate) {
      alert("An appointment already exists at this time!");
      return;
    }

    const updated =
      editingIndex !== null
        ? [...existing.slice(0, editingIndex), formData, ...existing.slice(editingIndex + 1)]
        : [...existing, formData];

    setAppointments({ ...appointments, [key]: updated });
    setOpen(false);
    setEditingIndex(null);
  };

  const handleDelete = (indexToDelete) => {
    const key = selectedDate.toDateString();
    const updated = (appointments[key] || []).filter((_, i) => i !== indexToDelete);
    const newAppointments = { ...appointments };

    if (updated.length > 0) newAppointments[key] = updated;
    else delete newAppointments[key];

    setAppointments(newAppointments);
    setEditingIndex(null);
    setFormData({ patient: "", doctor: "", time: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  const tileContent = ({ date }) => {
    const key = date.toDateString();
    const appts = appointments[key] || [];
    if (!appts.length) return null;

    return (
      <ul style={{ paddingLeft: 4, margin: 0, listStyle: "none" }}>
        {appts.slice(0, 2).map((a, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.65rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#1B1B1B",
            }}
          >
            {a.time} - {a.patient}
          </li>
        ))}
        {appts.length > 2 && (
          <li style={{ fontSize: "0.6rem", color: "#888" }}>
            +{appts.length - 2} more
          </li>
        )}
      </ul>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F1F8E9",
        color: "#1B1B1B",
      }}
    >
      {/* ✅ AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#2E7D32" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="/pfactorial-logo.jpg" alt="Clinic Logo" />
            <Typography variant="h6" sx={{ color: "#F1F8E9", fontWeight: "bold" }}>
              Pfactorial Clinic Appointment Portal
            </Typography>
          </Box>
          <Button color="inherit" endIcon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* ✅ Page Content */}
      <Box sx={{ p: isMobile ? 1 : 3 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 2,
            color: "#2E7D32",
            fontWeight: "bold",
            textShadow: "1px 1px 2px #c8e6c9",
          }}
        >
          Appointment Calendar
        </Typography>

        {/* 🔍 Search */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <TextField
            label="Search by patient, doctor or date"
            size="small"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: isMobile ? "90%" : "300px", backgroundColor: "#ffffff" }}
            inputProps={{ style: { color: "#1B1B1B" } }}
          />
        </Box>

        {/* 🔎 Search Results */}
        {searchTerm && (
          <Box sx={{ mb: 3, px: isMobile ? 1 : 4 }}>
            <Typography variant="h6">Search Results:</Typography>
            {Object.entries(appointments).map(([date, list]) =>
              list
                .filter(
                  (a) =>
                    a.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    a.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    date.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((a, i) => (
                  <Box
                    key={`${date}-${i}`}
                    sx={{
                      mt: 1,
                      p: 1,
                      backgroundColor: "#ffffff",
                      borderLeft: "4px solid #81C784",
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="body2">
                      📅 {date} — 🕒 {a.time} — 👤 {a.patient} — 🩺 {a.doctor}
                    </Typography>
                  </Box>
                ))
            )}
          </Box>
        )}

        {/* 📅 Calendar */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto" }}>
          <Calendar
            onClickDay={handleDayClick}
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={tileContent}
            className="calendar-full"
            view={isMobile ? "month" : "month"} // Optional: you can switch to "day" if needed using custom calendar
          />
        </Box>
      </Box>

      {/* ✏️ Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            p: 3,
            width: isMobile ? "90%" : 400,
            bgcolor: "#ffffff",
            borderRadius: 2,
            boxShadow: 24,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#2E7D32" }}>
            {editingIndex !== null
              ? `Edit Appointment for ${selectedDate.toDateString()}`
              : `Add Appointment for ${selectedDate.toDateString()}`}
          </Typography>

          {/* Editable List */}
          {(appointments[selectedDate.toDateString()] || []).length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "#1B1B1B" }}>
                Tap to Edit or Delete:
              </Typography>
              {(appointments[selectedDate.toDateString()] || []).map((a, idx) => (
                <Box
                  key={idx}
                  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, gap: 1 }}
                >
                  <Button
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ textTransform: "none", color: "#1B1B1B" }}
                    onClick={() => {
                      setFormData(a);
                      setEditingIndex(idx);
                    }}
                  >
                    🕒 {a.time} — 👤 {a.patient} — 🩺 {a.doctor}
                  </Button>
                  <Button variant="contained" color="error" size="small" onClick={() => handleDelete(idx)}>
                    🗑
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          {/* Form */}
          <TextField
            fullWidth
            select
            label="Patient"
            value={formData.patient}
            onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
            margin="normal"
          >
            {patients.map((p) => (
              <MenuItem key={p} value={p}>{p}</MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            select
            label="Doctor"
            value={formData.doctor}
            onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
            margin="normal"
          >
            {doctors.map((d) => (
              <MenuItem key={d} value={d}>{d}</MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            type="time"
            label="Time"
            InputLabelProps={{ shrink: true }}
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            margin="normal"
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#2E7D32", "&:hover": { backgroundColor: "#1B5E20" } }}
            onClick={handleSave}
          >
            {editingIndex !== null ? "Update Appointment" : "Save Appointment"}
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CalendarPage;
