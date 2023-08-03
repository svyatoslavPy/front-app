import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProjectItem = ({
  project,
}: {
  project: {
    id: any;
    name: string;
  };
}) => {
  const navigate = useNavigate();

  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate(project.id);
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
