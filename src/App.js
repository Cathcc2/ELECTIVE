import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PossibleLoginPageConcep1 from "./pages/PossibleLoginPageConcep1";
import Dashboard from "./pages/Dashboard";
import Logo from "./pages/Logo";
import AndroidLarge5 from "./pages/AndroidLarge5";
import AndroidLarge3 from "./pages/AndroidLarge3";
import AndroidLarge2 from "./pages/AndroidLarge2";
import AndroidLarge1 from "./pages/AndroidLarge1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/logo":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-5":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-3":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-2":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PossibleLoginPageConcep1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/android-large-5" element={<AndroidLarge5 />} />
      <Route path="/android-large-3" element={<AndroidLarge3 />} />
      <Route path="/android-large-2" element={<AndroidLarge2 />} />
      <Route path="/android-large-1" element={<AndroidLarge1 />} />
    </Routes>
  );
}
export default App;
