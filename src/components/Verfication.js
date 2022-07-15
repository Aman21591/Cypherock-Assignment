import React from 'react';
import './pages_CSS/verification.css';


const Verification = ({ open, onClose }) => {
    if (!open) return null;

  return (
    <div className="key-Container">
      <div className="item gap">
        <div className="key-box">
          25BKJNKNLJL58fjkdhfk26dnfds15
        </div>
      </div>
      <div className="bottomDiv text-item">
            <div className="description">
              <p>Verify address on device</p>
            </div>
            <div className="first_bar gap">
              <div className="left">
                <i class="bi bi-arrow-right"></i>
                <p>Please match the address to be shown in X1 Wallet</p>
              </div>

              <i class="bi bi-check2"></i>
            </div>
          </div>
    </div>
  );
};

export default Verification;
