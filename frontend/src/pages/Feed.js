import React, { useState, useEffect } from "react";
import { loadUser } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Naavbar from "../Navbar";
import "./Feed.css";

const Feed = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const dash = () => {
    history.push(`/profile/${auth.user._id}`);
  };
  const dispatch = useDispatch();
  console.log(auth.isAuth);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div>
      <div className="collection__container back">
        {" "}
        <Naavbar />
        <div className="title">
          <div className="row"></div>
          {auth.user && auth.user.isadmin === "true" ? (
            <div className="flexdash">
              <div className="dash_button_user">
                Welcome {auth.user.firstname}
              </div>
              <button className="dash_button" onClick={() => dash()}>
                Dashboard
              </button>
            </div>
          ) : auth.user ? (
            <div className="profile ">
              <div className="displayrow">
                <div style={{ width: "200px" }}>
                  <div className="collectioncontainertitle ">My Account</div>
                  <div className="row">
                    <div className="box1">Firstname : </div>
                    <div className="box2">{auth.user.firstname} </div>
                  </div>
                  <div className="row">
                    <div className="box1">Lastname : </div>
                    <div className="box2">{auth.user.lastname} </div>
                  </div>
                  <div className="row">
                    <div className="box1">Phone :</div>
                    <div className="box2">{auth.user.phone} </div>
                  </div>
                  <div className="row">
                    <div className="box1">Email :</div>
                    <div className="box2">{auth.user.email} </div>
                  </div>
                </div>

                <div style={{ width: "200px" }}>
                  <div className="collectioncontainertitle ">Order History</div>
                  <div className="box1">You haven't placed any orders yet.</div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="collection__container__products"></div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
