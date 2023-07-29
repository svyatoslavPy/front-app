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
const drawerWidth = 60;

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
              <ListItemText primary="Database" />
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
              <ListItemText primary="Graphql" />
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
              <ListItemText primary="Hasura" />
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
              <ListItemText primary="Auth" />
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
              <ListItemText primary="Site" />
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
              <ListItemText primary="Storage" />
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
              <ListItemText primary="Function" />
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
              <ListItemText primary="Monitoring" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("settings/general", { replace: true });
              }}
            >
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider orientation="vertical" flexItem />

      {/* <Box sx={{ flexGrow: 1, p: 3 }}> */}
        <Outlet />
      {/* </Box> */}
    </ProjectProvider>
  );
};
