import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home"; // Import the Home component
import "./App.css";
import GetHelp from "./Components/GetHelp";
import HelpOthers from "./Components/HelpOthers";
import Matches from "./Components/Matches";
import GetHelpSubmitted from "./Components/GetHelpSubmitted";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation with a Home link */}
        <nav >
          <Link className="nav-buttons" to="/">Home</Link> | {/* Link to the Home page */}
          <Link className="nav-buttons" to="/signup"> Sign Up  </Link> | <Link className="nav-buttons" to="/login"> Login</Link>
        </nav>
        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />{" "}
          {/* Display the Home component */}
          {/* Sign Up and Login Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/gethelp" element={<GetHelp />} />
          <Route path="/helpothers" element={<HelpOthers />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/gethelpsubmitted" element={<GetHelpSubmitted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
