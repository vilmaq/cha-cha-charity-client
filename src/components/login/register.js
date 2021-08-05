import React from "react";
import loginImg from "../../icons/logo.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div>Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">First Name</label>
              <input
                type="text"
                name="username"
                placeholder="first ame"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                name="username"
                placeholder="last name"
              ></input>
            </div>
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
