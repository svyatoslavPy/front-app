import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { useProject } from "hooks/useProject";
import { gql } from "__generated__";
import { GithubProviderSettings } from "./github";
import { PasswordProviderSettings } from "./password";

const UpdateProviders = gql(`
  mutation UpdateProviders($id: uuid!, $providers: jsonb!) {
    update_providers_by_pk(pk_columns: {id: $id}, _set: {providers: $providers}) {
      providers
      id
    }
  }
`);

export const AuthProvidersPage = () => {
  const { project } = useProject();
  const [updateProject, { data, loading, error }] =
    useMutation(UpdateProviders);

  console.log(project);
  return (
    <Box display="grid" gridTemplateColumns="1fr 6fr 1fr" rowGap={2}>
      <Box gridColumn="2">
        <Typography variant="h6"> Auth Providers</Typography>
      </Box>
      <Box gridColumn="2">
        <PasswordProviderSettings
          onUpdate={(value) =>
            updateProject({
              variables: {
                id: project.providersid,
                providers: {
                  ...project.provider.providers,
                  password: value,
                },
              },
            })
          }
        />
        <GithubProviderSettings
          onUpdate={async (value) => {
            await updateProject({
              variables: {
                id: project.providersid,
                providers: {
                  ...project.provider.providers,
                  github: value,
                },
              },
            });
          }}
        />
      </Box>
    </Box>
  );
};
