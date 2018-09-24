import React from "react";

import { Link } from "react-router-dom";

const Home = props => {
    // class Home extends React.Component {
    //     constructor(props) {
    //         super(props);
    //     }

    //     render() {
    //         let specific;
    //         specific = (
    //             <div>
    //                 <h1> HI!</h1>
    //             </div>
    //         );

    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.username : "Stranger"}!</h1>

            <Link to="/donation">
                <h1> Make a donation </h1>
            </Link>
            <Link to="/map">
                <h1> Map </h1>
            </Link>
            {/* {specific} */}
        </div>
    );
};

export default Home;
