import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { FiMail } from 'react-icons/fi';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';

function Otp({
  validateEmail,
  alertContent,
  setValidateEmail,
  data,
  triggerValidateEmail,
}) {
  const [otp, setOtp] = useState({
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    otp5: '',
  });
  const [incorrectOtp, setIncorectOtp] = useState(false);

  const inputFocus = (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 5) {
        e.target.form.elements[next].focus();
      }
    }
  };

  const validateOtp = async () => {
    setIncorectOtp(false)
    console.log('w');
    try {
      const url = `${baseUrl}/auth/verify-otp`;
      const response = await axios.post(url, {
        email: validateEmail?.email,
        otp: Object.keys(otp).reduce((q, w) => {
          q = `${q}${otp[w]}`;
          return q
        }, '')
      });
      setValidateEmail(false)
      setOtp({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: ''
      })
      alertContent();
    } catch (error) {
      if (error?.response?.status === 400) {
        setIncorectOtp(true)
      }
    }
  };

  return (<Dialog header="" visible={validateEmail} onHide={() => setValidateEmail(false)} style={{ width: 600 }}>
    <form onSubmit={(e) => {
      e.preventDefault();
      validateOtp()
    }} className="d-flex justify-content-start flex-column align-items-center  ">
      <FiMail size={40} className="mb-3" />
      <h5>Two Step Verification</h5>
      <p className="text-muted">Enter the verification code sent to your registered email address.</p>
      <p className="text-bold mt-3">Type your 5 digit security code.</p>
      <div >
        <input style={{ width: 60, height: 60, marginRight: 20, fontSize: 26, textAlign: 'center' }} tabIndex={1} maxLength={1} onKeyUp={inputFocus} onChange={(e) => setOtp({ ...otp, otp1: e.target.value })} />
        <input style={{ width: 60, height: 60, marginRight: 20, fontSize: 26, textAlign: 'center' }} tabIndex={2} maxLength={1} onKeyUp={inputFocus} onChange={(e) => setOtp({ ...otp, otp2: e.target.value })} />
        <input style={{ width: 60, height: 60, marginRight: 20, fontSize: 26, textAlign: 'center' }} tabIndex={3} maxLength={1} onKeyUp={inputFocus} onChange={(e) => setOtp({ ...otp, otp3: e.target.value })} />
        <input style={{ width: 60, height: 60, marginRight: 20, fontSize: 26, textAlign: 'center' }} tabIndex={4} maxLength={1} onKeyUp={inputFocus} onChange={(e) => setOtp({ ...otp, otp4: e.target.value })} />
        <input style={{ width: 60, height: 60, marginRight: 20, fontSize: 26, textAlign: 'center' }} tabIndex={5} maxLength={1} onKeyUp={inputFocus} onChange={(e) => setOtp({ ...otp, otp5: e.target.value })} />
      </div>
      {
        incorrectOtp && (
          <small style={{ color: 'red', marginTop: 15 }}>Incorrect Otp</small>
        )
      }
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary" onClick={() => validateOtp()} disabled={!(otp?.otp1 && otp?.otp2 &&
          otp?.otp3 && otp?.otp4 && otp?.otp5)}>Submit</button>
      </div>
    </form >
  </Dialog >
  );
}

export default Otp;
