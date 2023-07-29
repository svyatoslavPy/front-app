import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthRoot = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex", height: "100%" }}>
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("users", { replace: true });
                }}
              >
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("providers", { replace: true });
                }}
              >
                <ListItemText primary="Providers" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
