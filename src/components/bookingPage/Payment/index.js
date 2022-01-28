import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCardDetails, setCardError } from "../../../store/user/actions";
import UserInfoHandler from "../../app/UserInfoHandler";
import useBrowserHistory from "../../Hooks/browserHistory";
import useShallowEqualSelector from "../../Hooks/shallowEqualSelector";
import "./index.css";

export default function Payment({ onBack, onNext }) {
  useBrowserHistory("payment", true, onBack, onNext);
  const [showUserDatails, setShowUserDetails] = useState(false);
  const [error, cardError] = useState(false);
  const dispatch = useDispatch();
  const {  error: validationError  } = useShallowEqualSelector(
    ({ user }) => user
  );
  function handleCard(e) {
    if(e.length < 16){
      cardError(true)
    } else {
      cardError(false)
    }
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
          {error && <div className="footnote payment-card-error">CC numbers should be 16 digits</div>}
          {!error && validationError && <div className="footnote payment-card-error">Card is not valid</div>}
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
