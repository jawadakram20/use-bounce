import React from 'react';
import UserInfoHandler from '../../app/UserInfoHandler';
import useBrowserHistory from '../../Hooks/browserHistory';

export default function UserInfo({onBack, onNext}) {
  useBrowserHistory('userInfo', true, onBack, onNext);

  return(
    <UserInfoHandler />
  )
}