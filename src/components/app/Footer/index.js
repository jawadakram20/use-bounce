import React, { useCallback } from "react";
import useShallowEqualSelector from "../../Hooks/shallowEqualSelector";
import "./index.css";

export default function Footer({ onNext, currentScreenIndex }) {
  const { bagsCount, price } = useShallowEqualSelector(({ bags }) => bags);
  const { name, card, email, error, paymentError } = useShallowEqualSelector(
    ({ user }) => user
  );
  const isDisable = useCallback(() => {
    if (currentScreenIndex === 0 && bagsCount < 1) {
      return true;
    }
    if (currentScreenIndex === 1 && (!name || !email)) {
      return true;
    }
    if (currentScreenIndex === 2 && (!card || (card && error))) {
      return true;
    }
    return false;
  }, [bagsCount, card, currentScreenIndex, email, error, name]);

  const buttonTitle = useCallback(() => {
    if (currentScreenIndex === 2 && paymentError) {
      return "Retry";
    }
    if (currentScreenIndex === 2 && !paymentError) {
      return "Book";
    }
    return "Next";
  }, [currentScreenIndex, paymentError]);

  return (
    <div className="footer-main">
      <hr className="hr" />
      <div className="footer-wrapper">
        <div>
          <div className="body2">
            {bagsCount} {bagsCount > 1 ? "bags" : "bag"}
          </div>
          <div className="body bold">${price}</div>
        </div>
        <div
          className={`${
            !isDisable() ? "footer-button" : "footer-button-disable"
          } body ${paymentError && "red-background"}`}
          onClick={() => !isDisable() && onNext()}
        >
          {buttonTitle()}
        </div>
      </div>
    </div>
  );
}
