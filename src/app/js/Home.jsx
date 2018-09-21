import React from "react";

import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.username : "Stranger"}!</h1>
        </div>
    );
};

export default Home;
