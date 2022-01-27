import React from "react";
import { useDispatch } from "react-redux";
import { setUserEmail, setUserName } from "../../../store/user/actions";
import useShallowEqualSelector from "../../Hooks/shallowEqualSelector";
import "./index.css";

export default function UserInfoHandler() {
  const { name, email } = useShallowEqualSelector(
    ({ user }) => user
  );
  const dispatch = useDispatch();

  function handleNameChange(e) {
    dispatch(setUserName(e));
  }

  function handleEmailChange(e) {
    dispatch(setUserEmail(e));
  }

  return (
    <div className="user-main">
      <div className="body">Personal Details:</div>
      <div>
        <div className="footnote user-input-container">Name</div>
        <input
          type="text"
          onChange={(e) => {
            handleNameChange(e.target.value);
          }}
          PlaceHolder="John Doe"
          className="user-input"
          value={name}
        />
      </div>
      <div>
        <div className="footnote user-input-container">Email</div>
        <input
          type="email"
          onChange={(e) => {
            handleEmailChange(e.target.value);
          }}
          PlaceHolder="john@doe.com"
          className="user-input"
          value={email}
        />
      </div>
    </div>
  );
}
