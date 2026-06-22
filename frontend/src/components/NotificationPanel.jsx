import { motion } from "framer-motion";

export default function Notifications() {
  return (
    <motion.div
      className="container mt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <div className="glass p-3">

        <h5>Notifications</h5>

        <div className="notif-item">🔔 New job match for you</div>
        <div className="notif-item">👤 Rahul viewed your profile</div>
        <div className="notif-item">💼 Interview request received</div>

      </div>

    </motion.div>
  );
}