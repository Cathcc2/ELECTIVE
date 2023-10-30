import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge2.css";

const AndroidLarge2 = () => {
  const navigate = useNavigate();

  const onSkipTextClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/android-large-3");
  }, [navigate]);

  const onEpbackIconClick = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  return (
    <div className="android-large-2">
      <div className="easily-monitor-your-container">
        <p className="easily-monitor-your">
          Easily monitor your emotions daily. Understand your feelings, and take
        </p>
        <p className="easily-monitor-your">
          {" "}
          control of your mental well-being.
        </p>
      </div>
      <div className="skip1" onClick={onSkipTextClick}>
        Skip
      </div>
      <div className="next1" onClick={onNextTextClick}>
        Next
      </div>
      <b className="track-your-heatlh">Track Your Heatlh</b>
      <div className="android-large-2-child" />
      <div className="android-large-2-item" />
      <div className="android-large-2-inner" />
      <img
        className="bipolar-disorder-cuate-1"
        alt=""
        src="/bipolar-disordercuate-1@2x.png"
      />
      <img
        className="epback-icon3"
        alt=""
        src="/epback.svg"
        onClick={onEpbackIconClick}
      />
    </div>
  );
};

export default AndroidLarge2;
