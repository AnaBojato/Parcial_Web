import React from "react";
import "./Login.css";
import userIcon from '../assets/user.svg';
import { useLoginForm } from "./hooks";

export default function Login() {
    const {
        username,
        setUsername,
        password,
        setPassword,
        remember,
        setRemember,
        handleSubmit
    } = useLoginForm();

    return (
        <div className="login-container">
            <div className="circle top-left"></div>
            <div className="circle top-right"></div>

            <div className="login-content">
                <div className="user-icon">
                    <img src={userIcon} alt="User Icon" />
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                    />

                    <div className="remember">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <button type="submit" className="btn-signin">
                        Sign in
                    </button>

                    <button
                        type="button"
                        className="btn-forgot"
                        onClick={() => console.log("Redirect to forgot password")}
                    >
                        Forgot password?
                    </button>
                </form>
            </div>
        </div>
    );
}
