import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCardDetails, setCardError } from "../../../store/user/actions";
import UserInfoHandler from "../../app/UserInfoHandler";
import useBrowserHistory from "../../Hooks/browserHistory";
import "./index.css";

export default function Payment({ onBack, onNext }) {
  useBrowserHistory("payment", true, onBack, onNext);
  const [showUserDatails, setShowUserDetails] = useState(false);
  const dispatch = useDispatch();

  function handleCard(e) {
    if (e === "4242424242424242") {
      dispatch(setCardDetails(e));
      dispatch(setCardError(false))
    } else {
      dispatch(setCardError(true))
    }
  }

  return (
    <>
      {!showUserDatails ? (
        <div className="user-main-payment">
          <div className="payment-change-wrapper user-main-payment">
            <div className="body">Personal Details:</div>
            <div
              className="body"
              onClick={() => {
                setShowUserDetails(true);
              }}
            >
              change?
            </div>
          </div>
        </div>
      ) : (
        <UserInfoHandler />
      )}
      <hr className="payment-hr" />
      <div className="user-main">
        <div className="body">Payment Information</div>
        <div>
          <div className="footnote user-input-container">Card Details</div>
          <input
            type="text"
            className="user-input"
            onChange={(e) => {
              handleCard(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
