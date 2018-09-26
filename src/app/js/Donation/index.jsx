import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import moment from "moment";

import api from "../utils/api";

import PostDonation from "./Donation";
import NotFound from "../NotFound";
require("react-datepicker/dist/react-datepicker-cssmodules.css");
import "react-datepicker/dist/react-datepicker-cssmodules.css";

class Donate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            donationtitle: "",
            food: "",
            foodvalue: "",
            address: "",

            pick_up_date: moment(),
            cooked: "",
            designated_charities: "",
            special_instructions: "",
            venuename: ""
        };

        this._handleInputChange = this._handleInputChange.bind(this);
        this._postdonation = this._postdonation.bind(this);
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
                            venuename={this.state.venuename}
                            donationtitle={this.state.donationtitle}
                            food={this.state.food}
                            foodvalue={this.state.foodvalue}
                            address={this.state.address}
                            pick_up_date={this.state.pick_up_date}
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

    _handleInputChange(key, newValue) {
        this.setState({
            [key]: newValue
        });
    }

    _postdonation(latLng) {
        this.setState({
            error: ""
        });
        const pictureDeclaration = { picture: this.state.picture };
        api.post(
            `/api/donation`,
            {
                donationtitle: this.state.donationtitle,
                food: this.state.food,
                venuename: this.state.venuename,
                foodvalue: this.state.foodvalue,
                pick_up_date: this.state.pick_up_date,
                cooked: this.state.cooked,
                special_instructions: this.state.special_instructions,
                designated_charities: this.state.designated_charities,

                address: this.state.address,
                lat: latLng.lat,
                lng: latLng.lng
            },
            pictureDeclaration
        )

            .then(data => {
                console.log("DONATION RESPONSE: ", data);

                this.props.history.push("/donation-list");
            })
            .catch(err => {
                this.setState({
                    error: err.description
                });
            });
    }
}

export default withRouter(Donate);
