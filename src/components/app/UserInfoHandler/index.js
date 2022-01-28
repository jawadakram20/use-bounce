import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserEmail, setUserName } from "../../../store/user/actions";
import useShallowEqualSelector from "../../Hooks/shallowEqualSelector";
import { validateEmail } from "../../../utils";
import "./index.css";

export default function UserInfoHandler() {
  const [clientEmail, setClientEmail] = useState(null);
  const [error, setError] = useState(null);
  const { name, email } = useShallowEqualSelector(({ user }) => user);
  useEffect(() => {
    if (email) {
      setClientEmail(email);
    }
  }, [email]);
  const dispatch = useDispatch();

  function handleNameChange(e) {
    dispatch(setUserName(e));
  }

  function handleEmailChange(e) {
    setClientEmail(e);
  }

  function submitEmail() {
    if (validateEmail(clientEmail)) {
      dispatch(setUserEmail(clientEmail));
      setError(false);
    } else {
      dispatch(setUserEmail(clientEmail));
      setError(true);
    }
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
        {error && (
          <div className="footnote user-email-error">
            Your Email is not valid
          </div>
        )}
        <input
          type="email"
          onChange={(e) => {
            handleEmailChange(e.target.value);
          }}
          PlaceHolder="john@doe.com"
          className="user-input"
          value={clientEmail}
          onBlur={() => {
            submitEmail();
          }}
        />
      </div>
    </div>
  );
}
