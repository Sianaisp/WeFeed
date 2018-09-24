import React from "react";

import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let specific;
        if (this.props.user) {
            if (this.props.user.role === "Charity") {
                specific = (
                    <Link to="/donation-list">
                        <button type="button">See Donations</button>
                    </Link>
                );
            } else if (this.props.user.role === "Volunteer") {
                specific = (
                    <div>
                        <h1> Hi Volunteer!</h1>
                        <Link to="/donation-list">
                            <button type="button">See Donations</button>
                        </Link>
                    </div>
                );
            } else if (this.props.user.role === "Donator") {
                specific = (
                    <div>
                        <h1> Hi Donator!</h1>
                        <Link to="/donation">
                            <button type="button">Make a donation</button>
                        </Link>

                        <Link to="/donation-list">
                            <button type="button">See Donations</button>
                        </Link>
                    </div>
                );
            }
        }

        return (
            <div className="container">
                <h1>Hello, {this.props.user ? this.props.user.username : "Stranger"}!</h1>

                {/* <Link to="/donation">
                    <h1> Make a donation </h1>
                </Link>
                <Link to="/donation-list">
                    <h1> See all donations </h1>
                </Link> */}
                {specific}
            </div>
        );
    }
}

export default Home;
