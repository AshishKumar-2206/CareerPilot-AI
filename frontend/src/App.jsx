import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";
import EmailVerification from "./pages/EmailVerification";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Jobs from "./pages/Jobs";
import Connections from "./pages/Connections";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
<Route path="/messages" element={<Messages />} />
<Route path="/profile" element={<Profile />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/otp-verification" element={<OTPVerification />} />
<Route path="/email-verification" element={<EmailVerification />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/connections" element={<Connections />} />
<Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;