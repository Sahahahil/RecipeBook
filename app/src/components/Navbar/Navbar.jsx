// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

// const navItems = ["Recipes", "Categories"];

// const Navbar = () => {
//   return (
//     <AppBar component="nav" color="inherit">
//       <div className="flex" style={{ padding: "2rem" }}>
//         <Link to="/">
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               flexGrow: 1,
//               textAlign: { xs: "center", sm: "left" },
//               color: "#fff",
//               paddingLeft: { xs: "0px", sm: "12px" },
//             }}
//           >
//             HOME
//           </Typography>
//         </Link>
//         <div className="flex">
//           {navItems.map((item, index) => (
//             <Link
//               to={`/${item.toLowerCase()}`}
//               className="button is-light m-2"
//               key={index}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </AppBar>
//   );
// };

// export default Navbar;



import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const navItems = ["Recipes", "Categories"];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      color="inherit"
      position="fixed"
      sx={{
        left: 0,  // This fixes it to the left
        top: 0,
        width: "250px",
        height: "100vh",
        backgroundColor: "#098528",
        padding: "150px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* HOME at the top */}
      <Link to="/" style={{ textDecoration: "none", marginBottom: "70px" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
            width: "100%",
          }}
        >
          HOME
        </Typography>
      </Link>

      {/* Navigation Items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {navItems.map((item, index) => (
          <Link
            to={`/${item.toLowerCase()}`}
            key={index}
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
              textAlign: "center",
              width: "100%",
              padding: "10px 0",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0B6623")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            {item}
          </Link>
        ))}
      </div>
    </AppBar>
  );
};

export default Navbar;

