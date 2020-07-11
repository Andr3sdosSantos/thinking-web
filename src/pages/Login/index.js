import React from 'react';
import './styles.css';

/* import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import EmailIcon from '@material-ui/icons/Email'; */

function Login() {
  return (
    <>
      <div className="container">
        <div className="left-content">
          <div className="main-text">
            {`Keep what you're thinking, work in silence, let success make a noise for you.`}
          </div>
        </div>
        <div className="right-content">
          <div className="box-login">
            <div className="box-input-login">
              <label>{'Email'} <span>{'*'}</span> </label>
              <input type="text"/>
            </div>
            <div className="box-input-login">
              <label>{'Password'} <span>{'*'}</span> </label>
              <input type="password"/>
            </div>
            <input className="button" type="button" value="Login"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;