import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
    componentDidMount() {
        this.props.handleInputChange("email", "");
        this.props.handleInputChange("password", "");
    }

    render() {
        console.log("props", this.props);
        return (
            <body className="backpicsignin">
                <div className="card-container">
                    <div className=" signupcard container centerform">
                        <h1 className="signuptitle">Sign In</h1>
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
                        <button className="button" onClick={() => this.props.sign("in")}>
                            Sign In
                        </button>
                        <br />
                        <br />
                        <p>{this.props.error}</p>
                        <div className="separator" />
                        <Link className="link" to="/auth/sign-up">
                            Don't have an account yet? Sign up instead!
                        </Link>
                    </div>
                </div>
            </body>
        );
    }
}

export default SignIn;
