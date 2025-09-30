import React from 'react'
import OuterContainer from '../containers/OuterContainer/OuterContainer'
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useStorage/useStorage";
import { useEffect, useRef, useState } from "react";
import { useAsync } from "../hooks/useAsync/useAsync";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { API } from '../hooks/useBaseURL/useBaseURL';


function Login() {

    const query = new URLSearchParams(
        useLocation().search.replace("&", "__AMPERSAND__")
    );
    const redirect_to = query.get("redirect_to")?.replace("__AMPERSAND__", "&");
    const { data, isLoading, isError, error, run } = useAsync();
    const { login, user } = useAuth();
    const {
        register,
        handleSubmit,
        setError,
        getValues,
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm({ mode: "onChange" });

    // const [referralMail, setReferralMail, removeReferralMail] =
    // useLocalStorage("Username", email);

    // const { login, user } = useAuth();
    // const [referralMail, setReferralMail, removeReferralMail] =
    //     useLocalStorage("referral_email");

    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            if (user?.is_subscriber) {
                if (redirect_to) {
                    navigate(redirect_to);
                } else {
                    navigate("/dashboard");
                }
            } else {
                navigate("/login");
            }
        }
    }, [user]);


    const onSubmit = (loginData, e) => {

        console.log(loginData);
        e.preventDefault();
        //setReferralMail(getValues("email"));
        run(login(loginData))
            .then((d) => { })
            .catch((e) => {
                const message = e.message;
                if (message?.email || message?.password) {
                    alert("asdasd");
                    setError("email", {
                        //type: "server",
                        message: error.message?.email,
                    });
                    setError("password", {
                        //type: "server",
                        message: error.message?.password,
                    });
                } else if (message?.message_details) {
                    setError("email", {
                        type: "server",
                        message: message?.message_details,
                    });
                }
            });

        // const getCsrfToken = () => {
        //     // For Laravel - get from meta tag
        //     return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        // };


        // axios.post(API + "login", loginData, {
        //     headers: {
        //         'X-CSRF-TOKEN': getCsrfToken(), // Laravel expects this header name
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Referrer-Policy': 'no-referrer-when-downgrade'
        //     },
        //     withCredentials: false
        // })
        //     .then(function (response) {
        //         console.log("response", response.data);
        //         alert("you are login " + response.statusText);
        //         return false;
        //     })
    };


    return (
        <OuterContainer category="login-container">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="panel panel-body login-form">
                        <div className="text-center">
                            <div className="icon-object border-slate-300 text-slate-300"><i className="icon-reading"></i></div>
                            <h5 className="content-group">Login to your account <small className="display-block">Enter your credentials below</small></h5>
                        </div>

                        <div className="form-group has-feedback has-feedback-left">
                            <input type="text"
                                {...register('email', { required: true })}
                                id="email"
                                autoComplete="email"
                                name="email"
                                //value={loginData.email}
                                //onChange={handledChange}
                                className="form-control"
                                placeholder="email"
                            />
                            <div className="form-control-feedback">
                                <i className="icon-user text-muted"></i>
                            </div>

                            <div className="alert-danger no-border">{errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}</div>
                        </div>

                        <div className="form-group has-feedback has-feedback-left">
                            <input
                                {...register('password', { required: true })}
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="password"
                                //value={loginData.password}
                                //onChange={handledChange}
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="form-control-feedback">
                                <i className="icon-lock2 text-muted"></i>
                            </div>

                            <div className="alert-danger no-border">{errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}</div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 position-right"></i></button>
                        </div>

                        <div className="text-center">
                            <a href="login_password_recover.html">Forgot password?</a>
                        </div>
                    </div>
                </form></div>
        </OuterContainer>
    )
}

export default Login