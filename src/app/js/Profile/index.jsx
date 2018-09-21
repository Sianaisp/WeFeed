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
                    Do you have a car?
                    <br />
                    {this.props.user.car}
                    <br />
                    What is your availability?
                    <br />
                    {this.props.user.availability}
                </div>
            );
        }
        return (
            <div className="container">
                <img src={this.props.user.profilePicture} alt="" />
                <br />
                {this.props.user.role} Profile
                <br />
                {this.props.user.username}
                {additional}
            </div>
        );
    }
}

export default Profile;
