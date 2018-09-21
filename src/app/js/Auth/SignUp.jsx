import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    componentDidMount() {
        this.props.handleInputChange("email", "");
        this.props.handleInputChange("password", "");
        this.props.handleInputChange("username", "");
    }

    render() {
        let form;
        // let specific;
        // specific = (
        //     <input
        //         type="text"
        //         value={this.props.volunteer.car}
        //         onChange={evt => this.props.handleInputChange("car", evt.target.value)}
        //         className="input"
        //         placeholder="Car"
        //     />
        // );

        form = (
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
                    name="volunteer"
                    checked={this.props.role === "volunteer"}
                    onChange={() => this.props.handleInputChange("role", "volunteer")}
                    className="input"
                />
                <label htmlFor="">Donator</label>
                <input
                    type="radio"
                    name="donator"
                    checked={this.props.role === "donator"}
                    onChange={() => this.props.handleInputChange("role", "donator")}
                    className="input"
                />
                <label htmlFor="">Charity</label>
                <input
                    type="radio"
                    name="charity"
                    checked={this.props.role === "charity"}
                    onChange={() => this.props.handleInputChange("role", "charity")}
                    className="input"
                />
                <br />
                <br />
                {/* {specific} */}
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
        return <div>{form}</div>;
    }
}

export default SignUp;
