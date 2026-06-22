export default function Messages() {
  return (
    <div className="container-fluid mt-4">

      <div className="row">

        <div className="col-md-3">

          <div className="card p-3">

            <h4>Chats</h4>

            <ul className="list-group">

              <li className="list-group-item">
                Rahul Sharma 🟢
              </li>

              <li className="list-group-item">
                Priya Das 🟢
              </li>

              <li className="list-group-item">
                Ankit Kumar 🔴
              </li>

            </ul>

          </div>

        </div>

        <div className="col-md-9">

          <div className="card p-3">

            <h4>Chat Window</h4>

            <div
              style={{
                height: "400px",
                overflowY: "auto"
              }}
            >
              <p>
                Rahul: Hi Ashish 👋
              </p>

              <p>
                You: Hello Rahul
              </p>
            </div>

            <input
              type="text"
              className="form-control mt-3"
              placeholder="Type a message..."
            />

            <button className="btn btn-primary mt-2">
              Send
            </button>

            <hr />

            <h5>
              🤖 AI Suggested Reply
            </h5>

            <div className="alert alert-info">
              Thank you for reaching out.
              I'd love to discuss this opportunity.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}