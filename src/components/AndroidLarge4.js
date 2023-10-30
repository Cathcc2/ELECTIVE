import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge4.css";

const AndroidLarge4 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onEpbackIconClick = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  const onJoinAsAnonymousClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/android-large-5");
  }, [navigate]);

  return (
    <div className="android-large-4">
      <img className="android-large-4-child" alt="" src="/rectangle-2.svg" />
      <b className="sign-up">
        <span>Sign</span>
        <span className="up"> Up</span>
      </b>
      <img
        className="tablet-login-rafiki-2-1"
        alt=""
        src="/tablet-loginrafiki-2-1@2x.png"
      />
      <div className="create-a-new">Create a new account</div>
      <TextField
        className="android-large-4-item"
        color="primary"
        label="Full Name"
        sx={{ width: 331 }}
        variant="outlined"
        multiline
      />
      <img
        className="epback-icon"
        alt=""
        src="/epback.svg"
        onClick={onEpbackIconClick}
      />
      <TextField
        className="android-large-4-inner"
        color="primary"
        label="Email or Phone Number"
        sx={{ width: 331 }}
        variant="outlined"
      />
      <TextField
        className="frame"
        color="primary"
        label="Password"
        sx={{ width: 331 }}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPasswordClick}
                aria-label="toggle password visibility"
              >
                <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControlLabel
        className="frame1"
        label="I agree to terms and conditions"
        control={<Checkbox color="primary" />}
      />
      <Button
        className="frame2"
        sx={{ width: 220 }}
        color="primary"
        variant="contained"
      >
        Create Account
      </Button>
      <div className="frame3">
        <a className="join-as-anonymous" onClick={onJoinAsAnonymousClick}>
          Join as Anonymous
        </a>
        <div
          className="already-have-an-container"
          onClick={onAlreadyHaveAnClick}
        >
          <span>{`Already have an account? `}</span>
          <span className="login">Login</span>
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge4;
