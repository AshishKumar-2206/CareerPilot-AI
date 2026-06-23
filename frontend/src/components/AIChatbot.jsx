import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaRoad,
  FaUserTie,
  FaPenFancy,
  FaTimes,
} from "react-icons/fa";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
btn
btn-primary
rounded-circle
shadow-lg
ai-glow
"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#3b82f6,#8b5cf6)",
          color: "white",
          zIndex: 9999,
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes size={24} /> : <FaRobot size={28} />}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="shadow-lg"
            style={{
              position: "fixed",
              bottom: "110px",
              right: "25px",
              width: "340px",
              background: "#0f172a",
              borderRadius: "20px",
              overflow: "hidden",
              zIndex: 9999,
              border: "1px solid #334155",
            }}
          >
            {/* Header */}
            <div
              style={{
                background:
                  "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                color: "white",
                padding: "15px",
              }}
            >
              <h5 className="mb-0">
                🤖 ConnectSphere AI Coach
              </h5>

              <small>
                Choose an AI tool below
              </small>
            </div>

            {/* Body */}
            <div className="p-3">

              <button className="btn btn-outline-primary w-100 mb-3 text-start">
                <FaFileAlt className="me-2" />
                Resume Review
              </button>

              <button className="btn btn-outline-success w-100 mb-3 text-start">
                <FaRoad className="me-2" />
                Career Roadmap
              </button>

              <button className="btn btn-outline-warning w-100 mb-3 text-start">
                <FaUserTie className="me-2" />
                Interview Questions
              </button>

              <button className="btn btn-outline-info w-100 text-start">
                <FaPenFancy className="me-2" />
                LinkedIn Post Generator
              </button>

            </div>

            {/* Footer */}
            <div
              className="text-center"
              style={{
                background: "#1e293b",
                color: "#94a3b8",
                padding: "10px",
                fontSize: "12px",
              }}
            >
              Powered by ConnectSphere AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}