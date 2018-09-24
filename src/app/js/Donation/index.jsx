import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import api from "../utils/api";

import PostDonation from "./Donation";
import NotFound from "../NotFound";

class Donate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodtitle: "",
            food: "",
            picture: undefined,
            foodvalue: "",
            address: "",
            city: "",
            pick_up_date: "",
            pick_up_time: "",
            cooked: "",
            designated_charities: "",
            special_instructions: ""
        };

        this._handleInputChange = this._handleInputChange.bind(this);
        this._postdonation = this._postdonation.bind(this);
        this._isidore = this._isidore.bind(this);
    }

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/donation"
                    render={() => (
                        <PostDonation
                            isidore={this._isidore}
                            handleInputChange={this._handleInputChange}
                            postdonation={this._postdonation}
                            foodtitle={this.state.foodtitle}
                            food={this.state.food}
                            foodvalue={this.state.foodvalue}
                            address={this.state.address}
                            city={this.state.city}
                            pick_up_date={this.state.pick_up_date}
                            pick_up_date={this.state.pick_up_time}
                            cooked={this.state.cooked}
                            designated_charities={this.state.designated_charities}
                            special_instructions={this.state.special_instructions}
                        />
                    )}
                />

                <Route component={NotFound} />
            </Switch>
        );
    }

    _isidore() {
        console.log("help");
    }

    _handleInputChange(key, newValue) {
        this.setState({
            [key]: newValue
        });
    }

    _postdonation() {
        this.setState({
            error: ""
        });
        const pictureDeclaration = { picture: this.state.picture };
        api.post(
            `/api/donation`,
            {
                foodtitle: this.state.foodtitle,
                food: this.state.food,
                foodvalue: this.state.foodvalue,
                pick_up_date: this.state.pick_up_date,
                cooked: this.state.cooked,
                special_instructions: this.state.special_instructions,
                designated_charities: this.designated_charities,
                city: this.state.city,
                address: this.state.address
            },
            pictureDeclaration
        )

            .then(data => {
                // localStorage.setItem("identity", data.token);
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

export default withRouter(Donate);
