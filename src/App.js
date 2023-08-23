import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop10 from "./pages/Desktop10";
import Desktop9 from "./pages/Desktop9";
import Desktop12 from "./pages/Desktop12";
import Desktop15 from "./pages/Desktop15";
import Desktop14 from "./pages/Desktop14";
import Desktop11 from "./pages/Desktop11";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import "./";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);
  const [formErrors, setFormErrors] = useState({
    phone: "empty",
    email: "empty",
    orgs: "empty",
    name1: "empty",
  });

  const [activeLink, setActiveLink] = useState(null);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    organization: "",
    licenseType: "",
    startDate: new Date().toISOString().substr(0, 10),
    endDate: "",
    noOfDays: 1,
    moduleSelected: [],
    licenseRestrictions: "",
    comments: "",
  });

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer-info":
        title = "";
        metaDescription = "";
        break;
      case "/preview":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-15":
        title = "";
        metaDescription = "";
        break;
      case "/module-selector":
        title = "";
        metaDescription = "";
        break;
      case "/license-details":
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
      <Route
        path="/"
        element={
          <Desktop9
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        }
      />
      <Route
        path="/license-type"
        element={
          <Desktop10
            formData={formData}
            setFormData={setFormData}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        }
      />
      <Route
        path="/license-details"
        element={<Desktop11 formData={formData} setFormData={setFormData} />}
      />
      <Route
        path="/preview"
        element={<Desktop12 formData={formData} setFormData={setFormData} />}
      />
      <Route
        path="/selected-modules"
        element={<Desktop15 formData={formData} setFormData={setFormData} />}
      />
      <Route
        path="/module-selector"
        element={<Desktop14 formData={formData} setFormData={setFormData} />}
      />
    </Routes>
  );
}
export default App;
