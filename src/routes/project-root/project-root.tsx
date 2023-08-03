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

import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ProjectProvider } from "../../hooks/useProject";
// const drawerWidth = 60

export const ProjectRoot = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  return (
    <ProjectProvider projectId={projectId as string}>
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              disabled
              onClick={() => {
                navigate("database", { replace: true });
              }}
            >
              <ListItemText primary="Database" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              disabled
              onClick={() => {
                navigate("graphql", { replace: true });
              }}
            >
              <ListItemText primary="Graphql" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("hasura", { replace: true });
              }}
            >
              <ListItemText primary="Hasura" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("auth", { replace: true });
              }}
            >
              <ListItemText primary="Auth" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton
              disabled
              onClick={() => {
                navigate("site", { replace: true });
              }}
            >
              <ListItemText primary="Site" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              disabled
              onClick={() => {
                navigate("storage", { replace: true });
              }}
            >
              <ListItemText primary="Storage" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              disabled
              onClick={() => {
                navigate("function", { replace: true });
              }}
            >
              <ListItemText primary="Function" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              disabled
              onClick={() => {
                navigate("monitoring", { replace: true });
              }}
            >
              <ListItemText primary="Monitoring" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("settings/general", {
                  replace: true,
                });
              }}
            >
              <ListItemText primary="Settings" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Outlet />
    </ProjectProvider>
  );
};
