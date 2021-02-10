import React, { useContext } from "react";
import { toast } from "react-toastify";
import useInput from "../hooks/useInput";
import { client } from "../utils";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const password = useInput("");
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
      return toast.error("Please fill in both the fields");
    }

    const body = { email: email.value, password: password.value };

    try {
      const { token } = await client("/auth/login", { body });
      localStorage.setItem("token", token);
    } catch (err) {
      return toast.error(err.message);
    }

    const user = await client("/auth/me");
    localStorage.setItem("user", JSON.stringify(user.data));
    setUser(user.data);
    toast.success("Login successful");

    email.setValue("");
    password.setValue("");
  };
  return (
    <form onSubmit={handleLogin}>
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
