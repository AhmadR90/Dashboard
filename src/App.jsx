import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import EditCourse from "./components/EditCourse";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route - Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />} />
       
      </Routes>
    </Router>
  );
}

export default App;
