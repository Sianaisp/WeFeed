import React, { Component } from "react";

class List extends Component {
    render() {
        return (
            <div>
                {this.props.donations.length ? (
                    this.props.donations.map(donation => (
                        <div className="list-group" key={donation._id}>
                            <div>
                                <br />
                                <h2>{donation.donationtitle}</h2>
                                <br />
                                What type of food is it? {donation.food}
                                <br />
                                Estimated value of the food:
                                {donation.foodvalue}
                                <br />
                                Venue name:
                                {donation.venuename}
                                <br />
                                Address:
                                {donation.address}
                                <br />
                                City:
                                {donation.city}
                                <br />
                                Is the food already prepared?
                                {donation.cooked}
                                <br />
                                When is the pick up?
                                {donation.pick_up_date}
                                <br />
                                Charity preferences:
                                {donation.designated_charities}
                                <br />
                                Special Instructions:
                                {donation.special_instructions}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-donations"> NO DONATIONS REGISTERED</div>
                )}
            </div>
        );
    }
}

export default List;
