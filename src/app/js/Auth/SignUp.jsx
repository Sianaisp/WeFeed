import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    componentDidMount() {
        this.props.handleInputChange("email", "");
        this.props.handleInputChange("password", "");
        this.props.handleInputChange("username", "");
        this.props.handleInputChange("car", "");
        this.props.handleInputChange("category", "");
        this.props.handleInputChange("cuisine", "");
        this.props.handleInputChange("availability", "");
        this.props.handleInputChange("address", "");
        this.props.handleInputChange("city", "");
    }

    render() {
        let additionalInfo;

        if (this.props.role === "Volunteer") {
            additionalInfo = (
                <div>
                    <input
                        type="text"
                        value={this.props.car}
                        onChange={evt => this.props.handleInputChange("car", evt.target.value)}
                        className="input"
                        placeholder="Do you have a car?"
                    />
                    <br />
                    <input
                        type="text"
                        value={this.props.availability}
                        onChange={evt => this.props.handleInputChange("availability", evt.target.value)}
                        className="input"
                        placeholder="Availability"
                    />
                </div>
            );
        } else if (this.props.role === "Charity") {
            additionalInfo = (
                <div>
                    <input
                        type="text"
                        value={this.props.cuisine}
                        onChange={evt => this.props.handleInputChange("cuisine", evt.target.value)}
                        className="input"
                        placeholder="Cuisine"
                    />
                </div>
            );
        } else if (this.props.role === "Donator") {
            additionalInfo = (
                <div>
                    <input
                        type="text"
                        value={this.props.category}
                        onChange={evt => this.props.handleInputChange("category", evt.target.value)}
                        className="input"
                        placeholder="Category"
                    />
                </div>
            );
        }

        return (
            <div className="container">
                <h1>SignUp</h1>

                <br />
                <br />

                <input
                    type="text"
                    value={this.props.username}
                    onChange={evt => this.props.handleInputChange("username", evt.target.value)}
                    className="input"
                    placeholder="Username"
                />
                <br />
                <br />
                <input
                    type="email"
                    value={this.props.email}
                    onChange={evt => this.props.handleInputChange("email", evt.target.value)}
                    className="input"
                    placeholder="E-Mail"
                />
                <br />
                <br />
                <input
                    type="password"
                    value={this.props.password}
                    onChange={evt => this.props.handleInputChange("password", evt.target.value)}
                    className="input"
                    placeholder="Password"
                />
                <br />
                <br />
                <input
                    type="text"
                    value={this.props.address}
                    onChange={evt => this.props.handleInputChange("address", evt.target.value)}
                    className="input"
                    placeholder="Address"
                />
                <br />
                <br />
                <input
                    type="text"
                    value={this.props.city}
                    onChange={evt => this.props.handleInputChange("city", evt.target.value)}
                    className="input"
                    placeholder="City"
                />
                <br />
                <br />
                <input
                    type="file"
                    value={this.props.picture}
                    onChange={evt => this.props.handleInputChange("picture", evt.target.files[0])}
                    className="input"
                    placeholder="Profile Picture"
                />
                <br />
                <br />
                <label htmlFor="">Role</label>
                <br />
                <label htmlFor="">Volunteer</label>
                <input
                    type="radio"
                    name="Volunteer"
                    checked={this.props.role === "Volunteer"}
                    onChange={() => this.props.handleInputChange("role", "Volunteer")}
                    className="input"
                />
                <label htmlFor="">Donator</label>
                <input
                    type="radio"
                    name="Donator"
                    checked={this.props.role === "Donator"}
                    onChange={() => this.props.handleInputChange("role", "Donator")}
                    className="input"
                />
                <label htmlFor="">Charity</label>
                <input
                    type="radio"
                    name="Charity"
                    checked={this.props.role === "Charity"}
                    onChange={() => this.props.handleInputChange("role", "Charity")}
                    className="input"
                />
                <br />
                <br />

                {additionalInfo}

                <button className="button" onClick={() => this.props.sign("up")}>
                    Sign Up
                </button>
                <br />
                <br />
                <p>{this.props.error}</p>
                <div className="separator" />
                <Link className="link" to="/auth/sign-in">
                    Do you have an account already? Sign in instead!
                </Link>
            </div>
        );
    }
}

export default SignUp;
