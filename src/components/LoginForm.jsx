import React from "react";

const LoginForm = (props) => {
  return (
    <>
      <form id="login-form">
        <label>Email</label>
        <input name="email" type="email" id="email"></input>
        <label>Password</label>
        <input name="pasword" type="pasword" id="pasword"></input>
        <button id="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
