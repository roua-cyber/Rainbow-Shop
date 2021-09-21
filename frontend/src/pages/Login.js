import React, { useState, useEffect } from "react";
import { loginUser } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import "./Auth.css";
import Naavbar from "../Navbar";

const Login = ({ history }) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/feed");
    }
  }, [auth.isAuth]);
  return (
    <div className="register-screen">
      <form onSubmit={login} className="register-screen__form">
        <h3 className="register-screen__title">Login</h3>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" onChange={handleChange}></input>
        </div>
        {auth.error ? (
          <div className="err">
            {auth.error.filter((el) => el.msg === "register before")[0]?.msg}
          </div>
        ) : (
          console.log(auth.error)
        )}
        <div className="form-group">
          <label>Password</label>
          <input type="text" name="password" onChange={handleChange}></input>
          {auth.error ? (
            <div className="err">
              {
                auth.error.filter(
                  (el) =>
                    el.msg === "enter your password" ||
                    el.msg === "wrong password"
                )[0]?.msg
              }
            </div>
          ) : (
            console.log(auth.error)
          )}
        </div>

        <button
          type="submit"
          className="btnn"
          onClick={() => (auth.error = null)}
        >
          Login
        </button>
        <Naavbar />
      </form>
    </div>
  );
};

export default Login;
