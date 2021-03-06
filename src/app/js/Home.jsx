import React from "react";

import { Link } from "react-router-dom";
import Map from "./DonationList/Map";
import Presentation from "./Presentation/Presentation";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
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
                                <p className="voltext">
                                    {" "}
                                    Thank you for applying to be a volunteer with us. We have recorded
                                    your information and will send it to all the charities in your area.
                                    You will be contacted soon.
                                    <br /> Thank you for your participation!{" "}
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
                    <body background="/images/straw3.jpg">
                        <div className="card-container">
                            <div className="donator">
                                <img src="/images/food4.jpg" alt="Food" height="250px" />
                                <h1> Hi {this.props.user.username} </h1>
                                <div className="donatext">
                                    Thank you for taking part in WeFeed. <br />
                                    You have extra food and would like to send it to charities. Please
                                    make your donation below!
                                    <br />
                                    <br />
                                </div>
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
                    </body>
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
