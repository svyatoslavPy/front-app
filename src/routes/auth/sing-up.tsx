import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RegistrationFlow } from "@ory/client";
import { useAuth } from "../../hooks/useAuth";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import { Link as RouterLink } from "react-router-dom";

export const SingUp = () => {
  const { getRegistrationFlow, register: registerAction } = useAuth();
  const [registrationFlow, setRegistrationFlow] = useState<RegistrationFlow>([] as any);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    (async () => setRegistrationFlow(await getRegistrationFlow()))();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Grid item>
        <Card sx={{ width: 300 }}>
          <CardContent>
            <form
              onSubmit={handleSubmit((data) => {
                registerAction(registrationFlow.id, {
                  ...data,
                  method: "password",
                });
              })}
            >
              <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="stretch"
                spacing={2}
                sx={{ height: "100%" }}
              >
                <Grid item>
                  <Typography variant="h6" align="center">
                    Sign up to Coreup
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<GithubIcon />}
                    onClick={() => {
                      const csfrToken = (
                        registrationFlow?.ui?.nodes.find(
                          (node: any) => node.attributes.name === "csrf_token",
                        )?.attributes as any
                      ).value;
                      registerAction(registrationFlow.id, {
                        provider: "github",
                        csrf_token: csfrToken,
                      });
                    }}
                  >
                    Continue with GitHub
                  </Button>
                </Grid>
                <Grid item>
                  <Divider>or</Divider>
                </Grid>
                {registrationFlow?.ui?.nodes
                  .filter((node) => node.group !== "oidc")
                  .map((node: any) => {
                    if (node.attributes.type === "submit" && node.attributes.name === "method") {
                      return (
                        <Grid item>
                          <Button fullWidth variant="contained" type="submit">
                            {node.meta.label.text}
                          </Button>
                        </Grid>
                      );
                    }
                    if (node.attributes.type === "hidden") {
                      return (
                        <input
                          type={node.attributes.type}
                          {...register(node.attributes.name, {
                            value: node.attributes.value,
                          })}
                        ></input>
                      );
                    }
                    if (node.type === "input") {
                      if (node.attributes.type === "password") {
                        return (
                          <Grid item>
                            <TextField
                              size="small"
                              fullWidth
                              label={node.meta.label.text}
                              type={node.attributes.type}
                              {...register(node.attributes.name)}
                            />
                          </Grid>
                        );
                      }
                      if (node.attributes.type === "email") {
                        return (
                          <Grid item>
                            <TextField
                              size="small"
                              label={node.meta.label.text}
                              fullWidth
                              type={node.attributes.type}
                              {...register(node.attributes.name)}
                            />
                          </Grid>
                        );
                      }
                      if (node.attributes.type === "text") {
                        return (
                          <Grid item>
                            <TextField
                              size="small"
                              label={node.meta.label.text}
                              fullWidth
                              type={node.attributes.type}
                              {...register(node.attributes.name)}
                            />
                          </Grid>
                        );
                      }
                    }
                  })}
              </Grid>
            </form>
            <Typography paddingTop={2} variant="subtitle2" align="center">
              Have an account?&nbsp;
              <Link color="inherit" component={RouterLink} to="/sing-in">
                Sign In
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
