import React from "react";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { UseStore, Actions } from "../../store";
import authApi from "../../apis/authApis";

function Login() {
    const [state, dispatch] = UseStore();
    const history = useHistory();
    const handleLogin = async (e) => {
        e.preventDefault();
        const body = {
            userName: e.target.username.value,
            password: e.target.password.value,
        };
        const res = await authApi.login(body);
        dispatch(Actions.login(res.token));
    };
    return (
        <>
            {state.isAuthenticated ? (
                history.push("/admin")
            ) : (
                <div className="login-container">
                    <div className="login-logo">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={Logo}
                                alt=""
                                className="anthonyhai-logo"
                            />
                        </Link>
                    </div>
                    <div className="login-box-main">
                        <div className="login-title">
                            <span>Login</span>
                        </div>
                        <div className="login-input">
                            <form
                                action=""
                                method="POST"
                                className="login-form"
                                onSubmit={async (e) => {
                                    await handleLogin(e);
                                }}
                            >
                                <div className="login-form-main">
                                    <div className="login-form-group">
                                        <input
                                            className="form-input"
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            id="user-name"
                                            required
                                        />
                                    </div>
                                    <div className="login-form-group">
                                        <input
                                            className="form-input"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="summit-login-container">
                                    <input
                                        className="btn-submit-login"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="login-copyright">
                        <div className="content-down-copyright">
                            <span>Copyright belongs to Dang Ngo Hong Hai</span>
                        </div>
                        <div className="content-down-allrights">
                            <p>
                                &#169; {new Date().getFullYear()} All rights
                                reserved
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
