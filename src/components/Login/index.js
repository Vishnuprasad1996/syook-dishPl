import { Component } from "react";

import "./index.css";

class Login extends Component {
  state = {
    userList: [],
    username: "",
    password: "",
    errorOnSubmit: false,
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/");
  };

  onSubmitLoginForm = async (event) => {
    event.preventDefault();

    const { username, password, userList } = this.state;
    const apiUrl =
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json";
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.setState({ userList: data });
    userList.map((eachList) => {
      if (eachList.username === username && eachList.password === password) {
        this.onSubmitSuccess();
      } else {
        this.setState({ errorOnSubmit: true });
      }
    });
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { username, password, errorOnSubmit } = this.state;

    return (
      <div className="login-bg">
        <div className="login-content">
          <div className="logo-form-cont">
            <form onSubmit={this.onSubmitLoginForm} className="form-container">
              <label className="label" htmlFor="username">
                Username*
              </label>
              <input
                onChange={this.onChangeUsername}
                value={username}
                className="user-input"
                id="username"
                type="text"
              />
              <label className="label" htmlFor="password">
                Password*
              </label>
              <input
                onChange={this.onChangePassword}
                value={password}
                className="user-input"
                id="password"
                type="password"
              />
              <button type="submit" className="login-button">
                Login
              </button>
              {errorOnSubmit && (
                <p className="error-msg">Invalid Username or Password</p>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
