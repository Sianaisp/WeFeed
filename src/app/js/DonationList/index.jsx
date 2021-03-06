import React from "react";
import api from "../utils/api";

import Map from "./Map";
import List from "./List";

export default class DonationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            donations: [],
            loading: true
        };
    }

    componentDidMount() {
        api.get("api/donation").then(donations => {
            this.setState({
                donations: donations,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            );
        }
        return (
            <div>
                <div className="map-page">
                    <div className="map">
                        <Map donations={this.state.donations} />{" "}
                    </div>
                    <div className="list-items">
                        <List donations={this.state.donations} />
                    </div>
                </div>
            </div>
        );
    }
}
