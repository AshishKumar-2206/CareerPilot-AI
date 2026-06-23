import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Messages() {
  const [message, setMessage] = useState("");

  const chats = [
    {
      name: "Rahul Sharma",
      status: "Online",
      unread: 3,
    },
    {
      name: "Priya Das",
      status: "Online",
      unread: 1,
    },
    {
      name: "John Smith",
      status: "Offline",
      unread: 0,
    },
    {
      name: "Emma Wilson",
      status: "Online",
      unread: 2,
    },
  ];

  return (
      <>
        <Navbar />

        <div
            className="min-vh-100"
            style={{ background: "#f4f7fb" }}
        >
          <div className="container-fluid py-4">

            <div className="row">

              {/* LEFT CHAT LIST */}
              <div className="col-md-4">

                <div className="card border-0 shadow-lg">

                  <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">💬 Messages</h5>
                  </div>

                  <div className="card-body">

                    <input
                        className="form-control mb-3"
                        placeholder="Search conversations..."
                    />

                    {chats.map((chat, index) => (

                        <div
                            key={index}
                            className="d-flex align-items-center gap-3 border-bottom py-3"
                        >

                          <img
                              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${chat.name}`}
                              alt="profile"
                              width="45"
                              height="45"
                              className="rounded-circle"
                          />

                          <div className="flex-grow-1">

                            <strong>{chat.name}</strong>

                            <br />

                            <small>{chat.status}</small>

                          </div>

                          {chat.unread > 0 && (
                              <span className="badge bg-danger">
                          {chat.unread}
                        </span>
                          )}

                        </div>

                    ))}

                  </div>

                </div>

              </div>

              {/* CHAT WINDOW */}
              <div className="col-md-8">

                <div className="card border-0 shadow-lg">

                  <div className="card-header bg-dark text-white">

                    <div className="d-flex align-items-center gap-3">

                      <img
                          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Rahul"
                          alt="Rahul"
                          width="40"
                          height="40"
                          className="rounded-circle"
                      />

                      <div>
                        <strong>Rahul Sharma</strong>
                        <br />
                        <small>Online</small>
                      </div>

                    </div>

                  </div>

                  <div
                      className="card-body"
                      style={{
                        height: "500px",
                        overflowY: "auto",
                      }}
                  >

                    <div className="mb-3">
                      <div className="bg-light p-3 rounded">
                        Hi Ashish 👋
                      </div>
                    </div>

                    <div className="mb-3 text-end">
                      <div className="bg-primary text-white p-3 rounded d-inline-block">
                        Hello Rahul!
                      </div>
                    </div>

                  </div>

                  <div className="card-footer">

                    <div className="d-flex gap-2 mb-3">

                      <input
                          type="text"
                          className="form-control"
                          placeholder="Type message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                      />

                      <button className="btn btn-primary">
                        Send
                      </button>

                    </div>

                    <h6>🤖 AI Suggestions</h6>

                    <div className="d-flex gap-2 flex-wrap">

                      <button className="btn btn-outline-primary btn-sm">
                        Sounds good!
                      </button>

                      <button className="btn btn-outline-success btn-sm">
                        Let's schedule a call.
                      </button>

                      <button className="btn btn-outline-dark btn-sm">
                        Thank you for reaching out.
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </>
  );
}