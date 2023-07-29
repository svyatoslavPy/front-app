import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql } from "../../__generated__/gql";
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const AddProject = gql(`
  mutation AddProject($name: String!, $domain: String!, $type: String!) {
    insert_Project_one(object: {provider: {data: {}}, name: $name, domain: $domain, type: $type, }) {
      name
      id
      postgresPassword
      hasuraPassword
    }
  }
`);

export const ProjectCreate = () => {
  const [addProject, { data, loading, error }] = useMutation(AddProject);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Grid item>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <Typography variant="h6" paddingBottom={2}>
              New Project
            </Typography>
            <form
              onSubmit={handleSubmit(async (data) => {
                const project = await addProject({
                  variables: {
                    name: data.name,
                    domain: `${data.domain}.coreup.cc`,
                    type: "paid",
                  },
                });
                navigate(
                  `/dashboard/projects/${project.data?.insert_Project_one?.id}`
                );
              })}
            >
              <Box display="grid" rowGap={2}>
                <TextField
                  size="small"
                  label={"Project Name"}
                  fullWidth
                  type="type"
                  {...register("name")}
                />
                <TextField
                  size="small"
                  label={"Domain"}
                  fullWidth
                  type="type"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">.coreup.cc</InputAdornment>
                    ),
                  }}
                  {...register("domain")}
                />
                <Box justifySelf="end">
                  <Button variant="contained" type="submit">
                    Create
                  </Button>
                </Box>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
