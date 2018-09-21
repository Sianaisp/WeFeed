import React from "react";
import Create_profile_vol from "./Create_profiles/index";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.email : "Stranger"}!</h1>

            <Link to="/Create_profile_vol">
                <button type="button">Create your profile</button>
            </Link>
        </div>
    );
};

export default Home;
