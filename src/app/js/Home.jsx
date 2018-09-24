import React from "react";

import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.username : "Stranger"}!</h1>

            <Link to="/donation">
                <h1> Make a donation </h1>
            </Link>
            <Link to="/map">
                <h1> Map </h1>
            </Link>
        </div>
    );
};

export default Home;
