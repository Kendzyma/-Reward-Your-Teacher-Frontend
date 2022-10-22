import React from 'react'
import './LogoutModal.css'
export default function LogoutModal({logout,confirmation}) {
  return (
    <div className="modal-bglog">
      <div className="modalLogout">
        <div className="textDiv4">
          <p className="topText">Logout Confirmation</p>
        </div>
        <div className="">
          <p className="confirmationDiv">
            Are you sure you want to logout from your account?
          </p>
        </div>
        <div className="buttonDiv">
          <button className="button3" onClick={confirmation}>
            No
          </button>
          <button className="button4" onClick={logout}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
