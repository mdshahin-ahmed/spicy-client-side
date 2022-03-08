import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Dashboard.css";

import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Button } from "react-bootstrap";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashboard">
      <Toolbar />
      <Divider />
      <Link
        style={{ textAlign: "left" }}
        className="d-block text-decoration-none"
        to="/home"
      >
        Home
      </Link>

      {admin && (
        <Box>
          <Link
            style={{ textAlign: "left" }}
            className="d-block text-decoration-none"
            to="/dashboard/makeAdmin"
          >
            Make Admin
          </Link>
          <Link
            style={{ textAlign: "left" }}
            className="d-block text-decoration-none"
            to="/dashboard/addMenu"
          >
            Add Menu
          </Link>
          <Link
            style={{ textAlign: "left" }}
            className="d-block text-decoration-none"
            to="/dashboard/manageAllProducts"
          >
            Manage All Products
          </Link>
          <Link
            style={{ textAlign: "left" }}
            className="d-block text-decoration-none"
            to="/dashboard/manageOrders"
          >
            Manage Orders
          </Link>
        </Box>
      )}

      {!admin && (
        <Box>
          <Link
            style={{ textAlign: "left" }}
            className="d-block text-decoration-none"
            to="/dashboard/myOrders"
          >
            My Orders
          </Link>
          <Link
            style={{ textAlign: "left" }}
            className="d-block text-decoration-none"
            to="/dashboard/review"
          >
            Review
          </Link>
        </Box>
      )}

      <Button
        onClick={logOut}
        style={{ color: "black" }}
        variant="text"
        className="logout_button"
      >
        Log Out <i class="fas fa-sign-out-alt"></i>
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          style={{ background: "rgb(126, 126, 126)", textAlign: "center" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
