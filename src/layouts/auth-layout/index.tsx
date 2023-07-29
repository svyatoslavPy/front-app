import { CssBaseline } from "@mui/material";
import { useOutlet } from "react-router-dom";
import { AuthProvider } from "../../hooks/useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>
      <CssBaseline enableColorScheme />
      {outlet}
    </AuthProvider>
  );
};
