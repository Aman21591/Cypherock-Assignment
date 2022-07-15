import React from "react";
import './pages_CSS/RecieveSection.css';

const RecieveSection = () => {
  return (
    <div className="coin-header">
      <div className="space-header">
        <p className="header-text">Coin Address</p>
      </div>
      <div className="container-box">
        <div className="container-text">
          <span className="text">
            25BKJNKNLJL58fjkdhfk26dnfds15
          </span>
          <span className="">
            <button className="copy-button">
              Copy
            </button>
          </span>
        </div>
      </div>
      <div className="address-box">
        <p className="address-text">! address verified</p>
      </div>
      <div className="re-verify-button">
        <button className="verify-button">
          Re-verify
        </button>
      </div>
    </div>
  );
};

export default RecieveSection;
