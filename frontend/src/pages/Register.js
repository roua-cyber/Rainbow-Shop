import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/authAction";
import "./Auth.css";
import Naavbar from "../Navbar";
import axios from "axios";

const Register = ({ history }) => {
  const [file, setfile] = useState(null);
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const selectImageToUpload = (e) => {
    setfile(e.target.files[0]);
  };
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/feed");
    }
  }, [auth.isAuth]);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(info, file));
  };
  return (
    <div className="register-screen">
      <form onSubmit={registerNow} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        <div className="form-group">
          <label>Firstname</label>
          <input type="text" name="firstname" onChange={handleChange}></input>
          {auth.error ? (
            <div className="err">
              {auth.error.filter((el) => el.param === "firstname")[0]?.msg}
            </div>
          ) : (
            console.log(auth.error)
          )}
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input type="text" name="lastname" onChange={handleChange}></input>
          {auth.error ? (
            <div className="err">
              {auth.error.filter((el) => el.param === "lastname")[0]?.msg}
            </div>
          ) : (
            console.log(auth.error)
          )}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" onChange={handleChange}></input>
          {auth.error ? (
            <div className="err">
              {auth.error.filter((el) => el.param === "phone")[0]?.msg}
            </div>
          ) : (
            console.log(auth.error)
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" onChange={handleChange}></input>
          {auth.error ? (
            <div className="err">
              {auth.error.filter((el) => el.param === "email")[0]?.msg}
            </div>
          ) : (
            console.log(auth.error)
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="text" name="password" onChange={handleChange}></input>
          {auth.error ? (
            <div className="err">
              {auth.error.filter((el) => el.param === "password")[0]?.msg}
            </div>
          ) : (
            console.log(auth.error)
          )}
        </div>
        {/* <div className="form-group">
          <label>Upload Image</label>
          <input
            type="file"
            name="avatar"
            onChange={selectImageToUpload}
          ></input>
        </div>
        <button
          onClick={(e) => {
            let formData = new FormData();
            formData.append("avatar", file);
            axios.post("/upl", formData).then((res) => console.log(res.data));
          }}
        >
          {" "}
          upload
        </button> */}
        <button
          type="submit"
          className="btnn"
          onClick={() => (auth.error = null)}
        >
          Register
        </button>
        <Naavbar />
      </form>
    </div>
  );
};

export default Register;
