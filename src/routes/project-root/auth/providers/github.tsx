import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useProject } from "hooks/useProject";
import { Box } from "@mui/system";
import { useController, useForm } from "react-hook-form";

export const GithubProviderSettings = ({
  onUpdate,
}: {
  onUpdate: (value: {
    enable: boolean;
    clientId: string;
    clientSecret: string;
  }) => Promise<void>;
}) => {
  const { project } = useProject();
  const { register, handleSubmit, control } = useForm<{
    enable: boolean;
    clientId: string;
    clientSecret: string;
  }>({
    defaultValues: project.provider.providers.github,
  });

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name: "enable",
    control,
  });

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Github</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form
          onSubmit={handleSubmit(async (data) => {
            await onUpdate({
              enable: data.enable,
              clientId: data.clientId,
              clientSecret: data.clientSecret,
            });
          })}
        >
          <Box
            display="grid"
            gridTemplateColumns="1fr 5fr 1fr"
          >
            <Box display="grid" rowGap={2} gridColumn="2">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Github enabled"
                />
              </FormGroup>
              <TextField
                size="small"
                label={"Client ID"}
                fullWidth
                type="type"
                {...register("clientId")}
              />
              <TextField
                size="small"
                label={"Client Secret"}
                fullWidth
                type="type"
                {...register("clientSecret")}
              />
              <TextField
                size="small"
                label={"Callback URL"}
                fullWidth
                type="type"
                disabled
                defaultValue={`https://${project.domain}/auth/self-service/methods/oidc/callback/github`}
              />
              <Box justifySelf="end">
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};
