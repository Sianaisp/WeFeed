import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="container nav-content">
                <div>
                    <div className="project">
                        WeFeed
                        <img
                            className="apple"
                            src="/images/apple2.png"
                            alt="Apple"
                            height="60"
                            width="60"
                        />
                    </div>
                </div>
                <div className="homeprofile">
                    <Link className="link nav-link" to="/">
                        Home
                    </Link>
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/profile">
                                Profile
                            </Link>
                        </span>
                    )}

                    {props.user ? (
                        <Link className="link nav-link" to="/auth/logout">
                            Logout
                        </Link>
                    ) : (
                        <span>
                            <Link className="link nav-link" to="/auth/sign-in">
                                Log in
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link " to="/auth/sign-up">
                                <span className="bordered"> Sign up </span>
                            </Link>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
