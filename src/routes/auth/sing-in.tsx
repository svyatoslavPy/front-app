import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFlow } from "@ory/client";
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

export const SingIn = () => {
  const { getLoginFlow, login } = useAuth();
  const [loginFlow, setLoginFlow] = useState<LoginFlow>([] as any);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    (async () => setLoginFlow(await getLoginFlow()))();
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
                login(loginFlow.id, { ...data, method: "password" });
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
                    Sign in to Coreup
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<GithubIcon />}
                    onClick={() => {
                      const csfrToken = (
                        loginFlow?.ui?.nodes.find(
                          (node: any) => node.attributes.name === "csrf_token",
                        )?.attributes as any
                      ).value;
                      login(loginFlow.id, {
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
                {loginFlow?.ui?.nodes
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
              Don't have an account?&nbsp;
              <Link color="inherit" component={RouterLink} to="/sing-up">
                Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
