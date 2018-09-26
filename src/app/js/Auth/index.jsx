import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import api from "../utils/api";

import SignUp from "./SignUp";
import Logout from "./Logout";
import SignIn from "./SignIn";
import NotFound from "../NotFound";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            picture: undefined,
            error: "",
            username: "",
            role: "Volunteer",
            car: "",
            availability: "",
            category: "",
            city: "",
            address: "",
            cuisine: ""
        };

        this._handleInputChange = this._handleInputChange.bind(this);
        this._sign = this._sign.bind(this);
    }

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/auth/sign-up"
                    render={() => (
                        <SignUp
                            handleInputChange={this._handleInputChange}
                            email={this.state.email}
                            password={this.state.password}
                            role={this.state.role}
                            username={this.state.username}
                            error={this.state.error}
                            sign={this._sign}
                            address={this.state.address}
                            city={this.state.city}
                            availability={this.state.availability}
                            car={this.state.car}
                            category={this.state.category}
                            cuisine={this.state.cuisine}
                        />
                    )}
                />
                <Route
                    exact
                    path="/auth/sign-in"
                    render={() => (
                        <SignIn
                            handleInputChange={this._handleInputChange}
                            email={this.state.email}
                            password={this.state.password}
                            error={this.state.error}
                            sign={this._sign}
                            username={this.state.username}
                            address={this.state.address}
                            city={this.state.city}
                            availability={this.state.availability}
                            car={this.state.car}
                            category={this.state.category}
                            cuisine={this.state.cuisine}
                        />
                    )}
                />
                <Route
                    exact
                    path="/auth/logout"
                    render={() => <Logout resetUser={this.props.resetUser} />}
                />
                <Route component={NotFound} />
            </Switch>
        );
    }

    _handleInputChange(key, newValue) {
        this.setState({
            [key]: newValue
        });
    }

    _sign(type) {
        this.setState({
            error: ""
        });

        const pictureDeclaration = type === "up" && { picture: this.state.picture };

        api.post(
            `/api/auth/sign-${type}`,
            {
                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                role: this.state.role,
                car: this.state.car,
                availability: this.state.availability,
                cuisine: this.state.cuisine,
                category: this.state.category,
                city: this.state.city,
                address: this.state.address
            },
            pictureDeclaration
        )
            .then(data => {
                localStorage.setItem("identity", data.token);
                this.props.setUser();
                this.props.history.push("/");
            })
            .catch(err => {
                this.setState({
                    error: err.description
                });
            });
    }
}

export default withRouter(Auth);
