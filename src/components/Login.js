import React from "react";
import useInput from "../hooks/useInput";

const Login = () => {
  const email = useInput("");
  const password = useInput("");

  return (
    <form >
      <form>
        <input
          type="email"
          placeholder="email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="password"
          placeholder="password"
          value={password.value}
          onChange={password.onChange}
        />
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
