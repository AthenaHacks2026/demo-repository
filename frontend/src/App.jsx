import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Services from "./Pages/Services";
import Profile from "./Pages/Profile";
import SkillsStep from "./Pages/SkillsStep";
import SearchSkills from "./Pages/SearchSkills";
import CreateRequest from "./Pages/CreateRequest";
import OpenRequests from "./Pages/OpenRequests";
import Approved from "./Pages/Approved";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skills-step" element={<SkillsStep />} />
      <Route path="/search" element={<SearchSkills />} />
      <Route path="/create-request" element={<CreateRequest />} />
      <Route path="/open-requests" element={<OpenRequests />} />
      <Route path="/approved" element={<Approved />} />
    </Routes>
  );
}

export default App;