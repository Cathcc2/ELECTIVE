import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge5.css";

const AndroidLarge5 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onGroupButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onEpbackIconClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  return (
    <div className="android-large-5">
      <div className="android-large-5-child" />
      <div className="forgot-password">Forgot Password?</div>
      <TextField
        className="android-large-5-item"
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
      <div className="doesnt-have-an-container">
        <span>{`Doesn’t have an account? `}</span>
        <span className="signup">Signup</span>
      </div>
      <Button
        className="android-large-5-inner"
        style={{ width: "220px" }}
        type="primary"
        onClick={onGroupButtonClick}
      >
        Log in
      </Button>
      <img
        className="epback-icon1"
        alt=""
        src="/epback.svg"
        onClick={onEpbackIconClick}
      />
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <b className="welcome-back">
        <span>{`Welcome `}</span>
        <span className="back">Back!</span>
      </b>
      <div className="continue-your-healthy">Continue your Healthy journey</div>
      <TextField
        className="group-textfield"
        color="primary"
        label="Email Address"
        sx={{ width: 331 }}
        variant="outlined"
      />
    </div>
  );
};

export default AndroidLarge5;
