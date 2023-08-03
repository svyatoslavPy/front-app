import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const drawerWidth = 120;

export const Root = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "rgb(23, 29, 38);",
            borderRight: "1px solid rgb(47, 54, 61);",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("projects", { replace: true });
                }}
              >
                <ListItemText
                  primary={"Projects"}
                  sx={{
                    color: "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider color="gray" />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  logout();
                }}
              >
                <ListItemText
                  primary={"Logout"}
                  sx={{
                    color: "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
};
