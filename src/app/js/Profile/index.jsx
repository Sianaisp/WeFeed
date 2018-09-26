import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Profile extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
        console.log(this.props.user);
        let additional;
        if (this.props.user.role === "Volunteer") {
            additional = (
                <div>
                    <u>Do you have a car?</u>
                    <br />
                    {this.props.user.car}

                    <br />
                    <u>What is your availability?</u>
                    <br />
                    {this.props.user.availability}
                    <br />
                </div>
            );
        } else if (this.props.user.role === "Charity") {
            additional = (
                <div>
                    <u>Your preferred type of food is :</u>
                    <br />
                    {this.props.user.cuisine}
                </div>
            );
        } else if (this.props.user.role === "Donator") {
            additional = (
                <div>
                    <u>What type of donator are you?</u>
                    <br />
                    {this.props.user.category}
                </div>
            );
        }
        return (
            <div className="card-container">
                <div className="container card ">
                    <img className="profilepic" src={this.props.user.profilePicture} alt="" />

                    <h2> Profile</h2>

                    <u>Name :</u>
                    <br />
                    {this.props.user.username}
                    <br />
                    <br />

                    <u>Address:</u>

                    <br />
                    {this.props.user.address}
                    <br />

                    {this.props.user.city}
                    <br />
                    <br />
                    {additional}
                </div>
            </div>
        );
    }
}

export default Profile;
