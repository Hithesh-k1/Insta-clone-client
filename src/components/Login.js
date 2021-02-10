import React from "react";

const Login = () => {
  return (
    <form>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" value="Log In" className="login-btn" />
      </form>

      <div>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </form>
  );
};

export default Login;
