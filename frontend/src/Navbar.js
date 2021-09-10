import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./redux/actions/authAction";
const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      {auth.isAuth ? (
        <>
          <Link
            className="login_butt"
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            {" "}
            <button className="logout_butt_but color">
              logout <i class="fas fa-sign-out-alt color"></i>
            </button>{" "}
          </Link>
        </>
      ) : (
        <div className="mar">
          <Link className="login_but" to="/login">
            {" "}
            <button
              className="login_butt_but"
              onClick={() => (auth.error = null)}
            >
              {" "}
              Login{" "}
            </button>{" "}
          </Link>
          <span className="login_but"> |</span>
          <Link className="login_but" to="/register">
            {" "}
            <button
              className="login_butt_but"
              onClick={() => (auth.error = null)}
            >
              {" "}
              register{" "}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
