import React, { useCallback, useState } from "react";
import Payment from "../components/bookingPage/Payment";
import UserInfo from "../components/bookingPage/UserInfo";
import useShallowEqualSelector from "../components/Hooks/shallowEqualSelector";
import BaseLayout from "../components/layout/BaseLayout";
import { useNavigate } from "react-router-dom";

const screens = ["userInfo", "payment"];

export default function Booking() {
  const [currentScreenIndex, setCurrentScreen] = useState(0);
  const navigate = useNavigate();
  const { paymentError } = useShallowEqualSelector(({ user }) => user);

  const onNext = useCallback(() => {
    if (currentScreenIndex + 1 < screens.length) {
      setCurrentScreen(currentScreenIndex + 1);
    } else if (!paymentError) {
      navigate("/placed");
    }
  }, [currentScreenIndex, navigate, paymentError]);
  return (
    <BaseLayout onNext={onNext} currentScreenIndex={currentScreenIndex}>
      <BookingScreens
        screen={screens[currentScreenIndex]}
        onNext={onNext}
        onBack={() => {
          if (currentScreenIndex === 0) {
            window.history.go(-1);
            return;
          }
          setCurrentScreen(currentScreenIndex - 1);
          window.scrollTo(0, 0);
        }}
      />
    </BaseLayout>
  );
}
function BookingScreens({ screen, ...props }) {
  switch (screen) {
    case "userInfo":
      return <UserInfo {...props} />;
    case "payment":
      return <Payment {...props} />;
    default:
      return null;
  }
}
