import { Box } from "@mui/material";
import { useProject } from "hooks/useProject";

export const Hasura = () => {
  const { project } = useProject();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <div>
        Hasura
        <div>
          <p>hasura pass: {project.hasuraPassword}</p>
          <a href={`https://${project.domain}/hasura/`} target="_blank">
            open hasura
          </a>
        </div>
      </div>
    </Box>
  );
};
