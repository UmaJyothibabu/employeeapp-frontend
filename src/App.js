import "./App.css";
// import "./components/Eform.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Eform from "./components/Eform";
import Dashboard from "./components/Dashboard";
import CustomizedDialogs from "./components/Dialogue";

function App(className = "App") {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/employeeapp-frontend" element={<Dashboard />} />
        <Route
          path="/employee"
          element={
            <CustomizedDialogs>
              <Eform />
            </CustomizedDialogs>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
