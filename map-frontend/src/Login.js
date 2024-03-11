import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "./features/authSlice";

import { useEffect } from "react";
import Header from "./Header";

const Login = () => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const loginUser = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Header />
      <div className="log_main">
        <h2>VChat</h2>
        <p>Feel the Presence of your loved ones!</p>
        <h3>Login</h3>
        <form onSubmit={loginUser}>
          <label>Email</label>
          <input
            type="email"
            value={logData.email}
            onChange={(e) => setLogData({ ...logData, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            value={logData.password}
            onChange={(e) =>
              setLogData({ ...logData, password: e.target.value })
            }
          />
          <div className="reg_btn">
            <button type="submit">Login</button>
            <p>
              Create your account <Link to="/register">here</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
