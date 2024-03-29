import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Action } from "./Action";
import { AuthProvider } from "./AuthContext";
import { Home } from "./Home";
import { PasswordReset } from "./PasswordReset";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
});

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/action" element={<Action />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};
