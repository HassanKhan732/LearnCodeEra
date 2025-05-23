// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import CourseRoutes from "./CourseRoutes.jsx";
// import MobileViewRoutes from "./MobileViewRoutes.jsx";
// import CSSmobile from "./CSSmobile.jsx";
// import JavascriptRouter from "./JavascriptRouter.jsx";
// import SkillsRoutes from "./SkillsRoutes.jsx";
// import ReactRoutes from "./ReactRoutes.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//       <CourseRoutes />
//       <MobileViewRoutes />
//       <CSSmobile />
//       <JavascriptRouter />
//       <SkillsRoutes />
//       <ReactRoutes />
//     </BrowserRouter>
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
