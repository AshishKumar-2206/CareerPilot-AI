export default function OTPVerification() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "450px" }}>
        <h2 className="text-center mb-4">
          OTP Verification
        </h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter OTP"
        />

        <button className="btn btn-success w-100">
          Verify OTP
        </button>
      </div>
    </div>
  );
}