import { AppBar, Box, Toolbar, Tabs, Tab, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const active = location.pathname;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#263238" }}>
        <Toolbar>
          <Container>
            <Tabs value={active} textColor="inherit" centered>
              <Tab label="Movies" value="/" to="/" component={Link} />
              <Tab
                label="Actors"
                value="/actors"
                to="/actors"
                component={Link}
              />
            </Tabs>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
