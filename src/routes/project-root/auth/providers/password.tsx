import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useProject } from "hooks/useProject";
import { useController, useForm } from "react-hook-form";

export const PasswordProviderSettings = ({
  onUpdate,
}: {
  onUpdate: (value: { enable: boolean }) => void;
}) => {
  const { project } = useProject();
  const { register, handleSubmit, control } = useForm<{
    enable: boolean;
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
        <Typography>Password</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form
          onSubmit={handleSubmit(async (data) => {
            await onUpdate({
              enable: data.enable,
            });
          })}
        >
          <Box display="grid" gridTemplateColumns="1fr 5fr 1fr">
            <Box display="grid" rowGap={2} gridColumn="2">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Password enabled"
                />
              </FormGroup>
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
