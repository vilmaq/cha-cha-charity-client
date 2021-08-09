import React from "react";
import loginImg from "../../icons/logo.svg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div>
          <h1>Login</h1>
        </div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username/Email</label>
              <input type="text" name="username" placeholder="username"></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
            </div>
            <div className="footer">
              <button type="button" className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
