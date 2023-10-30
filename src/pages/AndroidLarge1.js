import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge1.css";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onSkipTextClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className="android-large-1">
      <b className="welcome-to-healthy">Welcome to Healthy Haribon</b>
      <img
        className="mindfulness-cuate-1-icon"
        alt=""
        src="/mindfulnesscuate-1@2x.png"
      />
      <div className="frame13">
        <div className="take-a-step">
          Take a step towards better mental health. We are here to support you
          on your journey to emotional well-being.
        </div>
        <div className="frame-child2" />
        <div className="frame-child3" />
        <div className="frame-child4" />
      </div>
      <div className="frame14">
        <div className="skip2" onClick={onSkipTextClick}>
          Skip
        </div>
        <div className="next2" onClick={onNextTextClick}>
          Next
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge1;
