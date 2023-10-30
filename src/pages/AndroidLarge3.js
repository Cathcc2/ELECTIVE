import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AndroidLarge3.css";

const AndroidLarge3 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  const onEpbackIconClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className="android-large-3">
      <div className="explore-a-vast">
        Explore a vast library of resources. Empower yourself with knowledge to
        foster positive health.
      </div>
      <div className="already-have-an-container1">
        <span>{`Already have an account? `}</span>
        <span className="login1">Login</span>
      </div>
      <b className="access-valuable-resources">Access Valuable resources</b>
      <div className="android-large-3-child" />
      <div className="android-large-3-item" />
      <div className="android-large-3-inner" />
      <img
        className="learning-cuate-1-icon"
        alt=""
        src="/learningcuate-1@2x.png"
      />
      <div className="android-large-3-child1" onClick={onRectangleClick} />
      <div className="get-started">Get Started</div>
      <img
        className="epback-icon2"
        alt=""
        src="/epback.svg"
        onClick={onEpbackIconClick}
      />
    </div>
  );
};

export default AndroidLarge3;
