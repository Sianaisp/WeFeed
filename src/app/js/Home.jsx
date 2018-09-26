import React from "react";

import { Link } from "react-router-dom";
import Map from "./DonationList/Map";
import Presentation from "./Presentation/Presentation";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let specific;

        if (this.props.user) {
            if (this.props.user.role === "Charity") {
                specific = (
                    <body background="/images/lemon.jpg">
                        <div className="card-container">
                            <div className="donator rowitems">
                                <h2>Welcome {this.props.user.username}</h2>

                                <img src="/images/world.jpg" alt="Food" height="250px" width="250px" />
                                <br />
                                <br />
                                <Link to="/donation-list">
                                    <button className="buttondonations" type="button">
                                        See Donations
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </body>
                );
            } else if (this.props.user.role === "Volunteer") {
                specific = (
                    <body background="/images/pine.jpg">
                        <div className="card-container">
                            <div className="donator rowitems">
                                <h2>Welcome {this.props.user.username}</h2>

                                <img src="/images/vol1.jpg" alt="Food" height="250px" width="250px" />
                                <p>
                                    {" "}
                                    Thank you for applying to be a volunteer with us. We will send your
                                    information to all the charities in your area. blablablabla{" "}
                                </p>
                                <Link to="/donation-list">
                                    <button className="buttondonations" type="button">
                                        Access Donation Map
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </body>
                );
            } else if (this.props.user.role === "Donator") {
                specific = (
                    <div className="card-container">
                        <div className="donator">
                            <img src="/images/food4.jpg" alt="Food" height="250px" />
                            <h1> Hi {this.props.user.username} </h1>
                            Thank you for taking part blablablablablablablablabla Make a donation here:
                            <br />
                            <br />
                            <Link to="/donation">
                                <button className="buttondonations" type="button">
                                    Make a donation
                                </button>
                            </Link>
                            <Link to="/donation-list">
                                <button className="buttondonations" type="button">
                                    See Donations
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            }
        } else if (this.props.user === null) {
            specific = <Presentation />;
        }

        return (
            // {/* <Map donations={this.props.donations} /> */}

            // {/* <h1>Hello, {this.props.user ? this.props.user.username : "Stranger"}!</h1> */}

            <div>{specific}</div>
        );
    }
}

export default Home;
