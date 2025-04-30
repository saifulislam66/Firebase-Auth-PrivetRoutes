import React, { use } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";

function Login() {
  const userInfo = use(AuthContext);
  const { singInUser } = userInfo;
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("login ", email, password);

    singInUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl p-5 font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                className="btn btn-neutral mt-4"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
