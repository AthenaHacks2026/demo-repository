import InputField from "./InputField";

function SignUpForm() {
  return (
    <div className="signup-box">
      <h2>✦ Sign Up</h2>

      <InputField placeholder="Email" />
      <InputField placeholder="Password" type="password" />
      <InputField placeholder="Location" />

      <button className="signup-btn">Sign Up</button>

      <p className="login-link">
        Already have an account? <a href="#">Log In</a>
      </p>
    </div>
  );
}

export default SignUpForm;