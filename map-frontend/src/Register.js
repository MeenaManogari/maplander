import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { register, reset } from "./features/authSlice";

const Register = () => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = regData;

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

  const registerUser = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
  };

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div className="reg_main">
      <h2>VChat</h2>
      <p>Feel the Presence of your loved ones!</p>
      <h3>Register</h3>
      <form onSubmit={registerUser}>
        <h3>Register</h3>
        <label>Name</label>
        <input
          type="text"
          value={regData.name}
          onChange={(e) => setRegData({ ...regData, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          value={regData.email}
          onChange={(e) => setRegData({ ...regData, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          value={regData.password}
          onChange={(e) => setRegData({ ...regData, password: e.target.value })}
        />
        <div className="reg_btn">
          <button type="submit">Register</button>
          <p>
            already have an account?<Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
