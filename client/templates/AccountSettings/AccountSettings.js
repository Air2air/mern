import React from 'react';
import ChangeUsername from './../../components/ChangeUsername';
import ChangePassword from './../../components/ChangePassword';

export default function Account() {
  return (
    <div className="account-settings">
      <ChangeUsername />
      <ChangePassword />
    </div>
  );
}
