import { useCallback } from "react";
import { Button } from "@mui/material";
import "./PossibleLoginPageConcep1.css";

const PossibleLoginPageConcep1 = () => {
  const onSignInClick = useCallback(() => {
    // Please sync "Possible Sign Up page" to the project
  }, []);

  return (
    <div className="possible-login-page-concep-1">
      <div className="possible-login-page-concep-1-child" />
      <div className="possible-login-page-concep-1-item" />
      <div className="haribon">HARIBON</div>
      <button className="sign-in" autoFocus={true} onClick={onSignInClick}>
        Sign in
      </button>
      <Button
        className="possible-login-page-concep-1-inner"
        sx={{ width: 137 }}
        color="error"
        variant="contained"
      >
        LOG IN
      </Button>
      <input className="frame15" placeholder="Username" type="text" />
      <input className="frame16" placeholder="Password" type="text" />
    </div>
  );
};

export default PossibleLoginPageConcep1;
