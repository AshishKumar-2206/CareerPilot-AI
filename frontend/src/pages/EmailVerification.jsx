export default function EmailVerification() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 text-center" style={{ width: "500px" }}>

        <h2 className="text-success">
          Email Verified ✅
        </h2>

        <p className="mt-3">
          Your account has been successfully verified.
        </p>

      </div>
    </div>
  );
}